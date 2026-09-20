// Shared speech settings + text-to-speech text cleaner.
// Pure JS (no browser / Vite APIs) so both the Node generator script and the browser engine can import it.

export const VOICE_NAME = 'Alice (Clear, Engaging Educator)';
export const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
export const MODEL_ID = 'eleven_multilingual_v2';

// Per-style ElevenLabs voice settings (copied from the numberbound pipeline, see AUDIO_PIPELINE.md)
export const VOICE_STYLES = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
};

export function voiceSettingsFor(style) {
  return VOICE_STYLES[style] || VOICE_STYLES.statement;
}

const UNIT_WORDS = {
  km: ['kilometre', 'kilometres'],
  cm: ['centimetre', 'centimetres'],
  mm: ['millimetre', 'millimetres'],
  ml: ['millilitre', 'millilitres'],
  kg: ['kilogram', 'kilograms'],
  g: ['gram', 'grams'],
  m: ['metre', 'metres'],
  L: ['litre', 'litres'],
};

/**
 * Converts on-screen text (with digits and maths symbols) into text that
 * ElevenLabs reads flawlessly, e.g. "3 : 5" -> "3 to 5", "$24" -> "24 dollars".
 * The ORIGINAL text stays the key in audioMap; only the API request is cleaned.
 */
export function toSpeech(text) {
  if (!text) return '';
  let t = String(text);

  // decorative emoji / symbols are never read aloud
  t = t.replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, '');

  // money: $24 -> 24 dollars, $1.50 -> 1 dollar 50 cents
  t = t.replace(/\$(\d+)(?:\.(\d{2}))?/g, (_, d, c) => {
    const dollars = `${d} ${Number(d) === 1 ? 'dollar' : 'dollars'}`;
    return c && Number(c) > 0 ? `${dollars} ${Number(c)} cents` : dollars;
  });

  // unknown terms inside ratios: "8 : ?" -> "8 to what", "? : 21" -> "what to 21"
  t = t.replace(/(\d+|\b[A-Z]\b)\s*:\s*\?/g, '$1 to what');
  t = t.replace(/\?\s*:\s*(\d+)/g, 'what to $1');

  // numeric ratios (handles 2-part and 3-part): 2 : 3 : 5 -> 2 to 3 to 5
  let prev;
  do {
    prev = t;
    t = t.replace(/(\d+)\s*:\s*(\d+)/g, '$1 to $2');
  } while (t !== prev);

  // letter ratios (A : B) and word ratios (red : white)
  t = t.replace(/\b([A-Z])\s*:\s*([A-Z])\b/g, '$1 to $2');
  t = t.replace(/\s+:\s+/g, ' to ');

  // operators
  t = t
    .replace(/×/g, ' times ')
    .replace(/÷/g, ' divided by ')
    .replace(/−/g, ' minus ')
    .replace(/\s-\s/g, ' minus ')
    .replace(/\+/g, ' plus ')
    .replace(/≈/g, ' is about ')
    .replace(/=/g, ' equals ')
    .replace(/→/g, ' to ')
    .replace(/%/g, ' percent');

  // units that follow a number: 12 cm -> 12 centimetres
  t = t.replace(/(\d+(?:\.\d+)?)\s?(km|cm|mm|ml|kg|g|m|L)\b/g, (_, n, u) => {
    const [one, many] = UNIT_WORDS[u];
    return `${n} ${Number(n) === 1 ? one : many}`;
  });

  return t.replace(/\s+/g, ' ').replace(/\s+([,.!?])/g, '$1').trim();
}
