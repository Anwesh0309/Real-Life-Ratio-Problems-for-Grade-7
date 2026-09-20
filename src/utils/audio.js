import { audioMap } from './audioMap';
import { narrationScript, narrationStyles } from '../data/narration';
import { toSpeech, voiceSettingsFor, VOICE_ID, MODEL_ID } from './speech';

// Hybrid pipeline (see AUDIO_PIPELINE.md):
//  1. Pre-generated static .mp3 from audioMap  -> zero latency
//  2. Dynamic fallback: live ElevenLabs request for any text that is not pre-generated
//  3. Sequential queue with eager preloading of the next line
const ENV = import.meta.env || {};
const API_KEY = ENV.VITE_ELEVENLABS_API_KEY || '';
const PROXY_URL = ENV.VITE_ELEVENLABS_PROXY || '';

// Reverse lookup so callers can pass plain narration text and still get the right voice style
const styleByText = {};
Object.keys(narrationScript).forEach((key) => {
  styleByText[narrationScript[key]] = narrationStyles[key] || 'statement';
});

class SoundEngine {
  constructor() {
    this.currentAudio = null;
    this.audioEnabled = true;
    this.isPlaying = false;
    this.queue = [];
    this.token = 0; // bumps on every stop() so stale async loads never play
    this.blobCache = new Map(); // "style|text" -> blob url
    this.pending = new Map(); // "style|text" -> Promise<string|null>
    this.lastClickTime = 0;
    this.clickCtx = null;
  }

  setAudioEnabled(enabled) {
    this.audioEnabled = enabled;
    if (!enabled) {
      this.stop();
    }
  }

  stop() {
    this.token += 1;
    if (this.currentAudio) {
      this.currentAudio.onended = null;
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    this.isPlaying = false;
    this.queue = [];
  }

  playDragClick() {
    if (!this.audioEnabled) return;
    try {
      const now = Date.now();
      if (this.lastClickTime && now - this.lastClickTime < 45) return; // Throttled for smooth drag sound
      this.lastClickTime = now;

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.clickCtx) this.clickCtx = new AudioCtx();
      const ctx = this.clickCtx;
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(250, ctx.currentTime + 0.018);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.018);
    } catch (e) {
      // Ignore web audio errors if restricted
    }
  }

  // 1) pre-generated asset?
  getStaticUrl(text) {
    return audioMap[text] || audioMap[`key:${text}`] || null;
  }

  // 2) dynamic ElevenLabs request (cached as blob urls)
  fetchDynamicUrl(text, style) {
    const cacheKey = `${style}|${text}`;
    if (this.blobCache.has(cacheKey)) return Promise.resolve(this.blobCache.get(cacheKey));
    if (this.pending.has(cacheKey)) return this.pending.get(cacheKey);
    if (!API_KEY && !PROXY_URL) {
      console.warn(`[SoundEngine] No pre-generated audio and no API key for: "${text.substring(0, 40)}..." (run npm run generate:audio)`);
      return Promise.resolve(null);
    }

    const endpoint = PROXY_URL || `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
    const headers = { 'Content-Type': 'application/json', Accept: 'audio/mpeg' };
    if (!PROXY_URL) headers['xi-api-key'] = API_KEY;

    const request = fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        text: toSpeech(text),
        model_id: MODEL_ID,
        voice_settings: voiceSettingsFor(style),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`ElevenLabs ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        this.blobCache.set(cacheKey, url);
        this.pending.delete(cacheKey);
        return url;
      })
      .catch((err) => {
        console.warn('[SoundEngine] Dynamic audio failed:', err.message);
        this.pending.delete(cacheKey);
        return null;
      });

    this.pending.set(cacheKey, request);
    return request;
  }

  resolveUrl(text, style) {
    const staticUrl = this.getStaticUrl(text);
    if (staticUrl) return Promise.resolve(staticUrl);
    return this.fetchDynamicUrl(text, style);
  }

  // Start playing a URL; when it ends, continue with the queue and preload the following line
  startUrl(url, token) {
    if (token !== this.token) return;
    try {
      const audio = new Audio(url);
      this.currentAudio = audio;
      this.isPlaying = true;

      audio.onended = () => {
        if (token !== this.token) return;
        this.isPlaying = false;
        this.currentAudio = null;
        this.playNext(token);
      };

      audio.play().catch((err) => {
        console.warn('[SoundEngine] Audio play error:', err.message);
        if (token === this.token) {
          this.isPlaying = false;
          this.currentAudio = null;
        }
      });

      // eager preloading of the next queued segment
      if (this.queue.length > 0) {
        const next = this.queue[0];
        this.resolveUrl(next.text, next.style).catch(() => {});
      }
    } catch (e) {
      console.error('[SoundEngine] Audio error:', e);
      this.isPlaying = false;
    }
  }

  playNext(token) {
    if (token !== this.token || this.queue.length === 0) return;
    const { text, style } = this.queue.shift();
    this.load(text, style, token);
  }

  load(text, style, token) {
    const staticUrl = this.getStaticUrl(text);
    if (staticUrl) {
      this.startUrl(staticUrl, token);
      return;
    }
    this.isPlaying = true; // loading counts as busy so enqueue() waits its turn
    this.resolveUrl(text, style).then((url) => {
      if (token !== this.token) return;
      if (!url) {
        this.isPlaying = false;
        this.playNext(token);
        return;
      }
      this.startUrl(url, token);
    });
  }

  playText(text, style) {
    if (!this.audioEnabled || !text) return;
    this.stop(); // stop anything playing to prevent overlapping
    this.load(text, style || styleByText[text] || 'statement', this.token);
  }

  enqueue(text, style) {
    if (!this.audioEnabled || !text) return;
    const s = style || styleByText[text] || 'statement';
    if (!this.isPlaying) {
      this.load(text, s, this.token);
    } else {
      this.queue.push({ text, style: s });
      this.resolveUrl(text, s).catch(() => {}); // preload
    }
  }
}

export const soundEngine = new SoundEngine();
export default soundEngine;
