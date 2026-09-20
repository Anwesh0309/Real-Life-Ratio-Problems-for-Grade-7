import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { narrationScript, narrationStyles } from '../src/data/narration.js';
import { staticQuestionBank } from '../src/data/questionBank.js';
import { toSpeech, voiceSettingsFor, VOICE_ID, MODEL_ID } from '../src/utils/speech.js';

// ---------------------------------------------------------------------------
// Offline audio generation (see AUDIO_PIPELINE.md)
//   node scripts/generate_audio.js            -> generate every missing .mp3
//   node scripts/generate_audio.js --force    -> regenerate everything
//   node scripts/generate_audio.js --only=w3_ -> only files whose name starts with "w3_"
//   node scripts/generate_audio.js --dry-run  -> list what would be generated + character count
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const API_KEY = process.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY;
const OUTPUT_DIR = path.join(__dirname, '../public/assets/audio');
const MAP_FILE = path.join(__dirname, '../src/utils/audioMap.js');
const RATE_LIMIT_MS = 500;

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const DRY_RUN = args.includes('--dry-run');
const ONLY = (args.find((a) => a.startsWith('--only=')) || '').replace('--only=', '');

// ---------------------------------------------------------------------------
// The phrases array. Each entry = exact on-screen text + voice style.
// Content policy: paragraphs & questions ONLY. Never add titles or headings.
// ---------------------------------------------------------------------------
const phrases = [];

// 1) Core narration (home, wonder, story paragraphs, stations, feedback, reflect)
Object.entries(narrationScript).forEach(([key, text]) => {
  phrases.push({ key, text, style: narrationStyles[key] || 'statement' });
});

// 2) Practice questions: every prompt (question) and every hint
Object.values(staticQuestionBank).forEach((questions) => {
  questions.forEach((q) => {
    phrases.push({ key: `${q.id}_prompt`, text: q.prompt, style: 'question' });
    phrases.push({ key: `${q.id}_hint`, text: q.hint, style: 'thinking' });
  });
});

// 3) One-off lines: add new exact text + style here, then run this script
const extraPhrases = [
  // { key: 'my_new_line', text: 'Here is my new pedagogical line!', style: 'statement' },
];
phrases.push(...extraPhrases);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function requestAudio(text, style) {
  const body = JSON.stringify({
    text: toSpeech(text),
    model_id: MODEL_ID,
    voice_settings: voiceSettingsFor(style),
  });

  for (let attempt = 1; attempt <= 4; attempt++) {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      headers: { Accept: 'audio/mpeg', 'Content-Type': 'application/json', 'xi-api-key': API_KEY },
      body,
    });
    if (response.ok) return Buffer.from(await response.arrayBuffer());
    if (response.status === 429 && attempt < 4) {
      await sleep(2000 * attempt); // back off when rate limited
      continue;
    }
    throw new Error(`ElevenLabs API Error (${response.status}): ${await response.text()}`);
  }
}

async function run() {
  const selected = phrases.filter((p) => !ONLY || p.key.startsWith(ONLY));
  const chars = selected.reduce((n, p) => n + toSpeech(p.text).length, 0);
  console.log(`🎙️  ${selected.length} phrases selected (${chars.toLocaleString()} characters of ElevenLabs quota).`);

  if (DRY_RUN) {
    selected.forEach((p) => console.log(`  - ${p.key}.mp3 [${p.style}] ${toSpeech(p.text).slice(0, 70)}`));
    return;
  }
  if (!API_KEY) {
    console.error('❌ Missing API key. Put VITE_ELEVENLABS_API_KEY=... in .env.local');
    process.exit(1);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let made = 0;
  let skipped = 0;
  let failed = 0;
  for (let i = 0; i < selected.length; i++) {
    const { key, text, style } = selected[i];
    const file = path.join(OUTPUT_DIR, `${key}.mp3`);
    if (!FORCE && fs.existsSync(file)) {
      skipped++;
      continue;
    }
    try {
      console.log(`🗣️  [${i + 1}/${selected.length}] ${key}.mp3 (${style})`);
      fs.writeFileSync(file, await requestAudio(text, style));
      made++;
    } catch (e) {
      failed++;
      console.error(`❌ ${key}: ${e.message}`);
    }
    await sleep(RATE_LIMIT_MS);
  }

  // Rebuild src/utils/audioMap.js from every phrase whose .mp3 exists on disk
  const audioMap = {};
  phrases.forEach(({ key, text }) => {
    if (fs.existsSync(path.join(OUTPUT_DIR, `${key}.mp3`))) {
      audioMap[text] = `/assets/audio/${key}.mp3`;
      if (Object.prototype.hasOwnProperty.call(narrationScript, key)) audioMap[`key:${key}`] = `/assets/audio/${key}.mp3`;
    }
  });
  fs.writeFileSync(
    MAP_FILE,
    `// Auto-generated Audio Asset Map (run \`npm run generate:audio\` to refresh)\nexport const audioMap = ${JSON.stringify(audioMap, null, 2)};\nexport default audioMap;\n`,
    'utf-8'
  );

  console.log(`\n🎉 Done. Generated ${made}, skipped ${skipped} existing, failed ${failed}.`);
  console.log(`🗺️  audioMap.js now maps ${Object.keys(audioMap).length} entries.`);
  if (failed > 0) console.log('⚠️  Run the script again to retry the failed lines (existing files are skipped).');
}

run();
