# Real-Life Ratio Problems: Audio & Narration Pipeline

Same hybrid pipeline as the Number Bonds / Angles modules, using ElevenLabs.

## Voice profile
- Voice: **Alice (Clear, Engaging Educator)**, ID `Xb7hH8MSUJpSbSDYk0k2`
- Model: `eleven_multilingual_v2`
- Settings live in `src/utils/speech.js` (`VOICE_STYLES`):

| Style | Stability | Similarity | Style | Speaker Boost |
|-------|-----------|-----------|-------|---------------|
| `celebration` | 0.12 | 0.45 | 0.75 | yes |
| `encouragement` | 0.16 | 0.50 | 0.65 | yes |
| `question` | 0.20 | 0.55 | 0.55 | yes |
| `emphasis` | 0.16 | 0.50 | 0.60 | yes |
| `thinking` | 0.24 | 0.60 | 0.35 | yes |
| `statement` / `instruction` | 0.20 | 0.55 | 0.50 | yes |

**Content policy:** audio is generated ONLY for paragraph text and questions. Titles, headings and section labels are never narrated.

## How it works
1. **Pre-generation (offline)**: `npm run generate:audio` builds a `phrases` list (core narration + all 100 question prompts + 100 hints), asks ElevenLabs for each line in the right voice style and saves `public/assets/audio/<key>.mp3`. It then rewrites `src/utils/audioMap.js`.
2. **Static lookup**: `soundEngine.playText(text)` checks `audioMap[text]` first, so playback is instant.
3. **Dynamic fallback**: if a line is not in the map, the engine requests it live from ElevenLabs (using `VITE_ELEVENLABS_API_KEY`, or `VITE_ELEVENLABS_PROXY` if you set one) and caches it as a blob for the session.
4. **Queue + preloading**: `enqueue()` plays lines one after another and preloads the next line while the current one is speaking.
5. **Speech cleaning**: on-screen text keeps digits and symbols; `toSpeech()` converts them only for the API request (`3 : 5` -> "3 to 5", `$24` -> "24 dollars", `12 cm` -> "12 centimetres", `x`, `÷`, `=`).

## Commands
```bash
npm run generate:audio               # generate every missing .mp3 and rebuild audioMap.js
node scripts/generate_audio.js --dry-run     # list lines + ElevenLabs character count (no API calls)
node scripts/generate_audio.js --only=w3_    # only one world / prefix
node scripts/generate_audio.js --force       # regenerate everything
npm run clean:audio                  # delete .mp3 files no longer referenced by audioMap.js
```
The script skips files that already exist, so you can safely re-run it after a rate-limit or quota error. The full set is about 20,000 characters of ElevenLabs quota.

## Updating or adding narration
1. Edit the text in `src/data/narration.js` (and its style in `narrationStyles`), or edit a question in `src/data/questionBank.js`. Add one-off lines to `extraPhrases` in `scripts/generate_audio.js`.
2. Run `npm run generate:audio` (then optionally `npm run clean:audio`).
3. Components call `soundEngine.playText(narrationScript.some_key)` (or `playText(text, 'question')` for a style override). The text on screen must match the spoken text.

## API key
`.env.local` holds `VITE_ELEVENLABS_API_KEY`. Anything prefixed `VITE_` is bundled into the browser build, so once every line is pre-generated, remove the key from `.env.local` before deploying publicly (the app then plays only the static files).
