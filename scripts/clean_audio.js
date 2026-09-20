import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// Deletes every .mp3 in public/assets/audio that is no longer referenced by src/utils/audioMap.js
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, '../public/assets/audio');
const { audioMap } = await import(pathToFileURL(path.join(__dirname, '../src/utils/audioMap.js')).href);

const valid = new Set(Object.values(audioMap).map((p) => path.basename(p)));
let removed = 0;

if (fs.existsSync(AUDIO_DIR)) {
  fs.readdirSync(AUDIO_DIR)
    .filter((f) => f.endsWith('.mp3'))
    .forEach((f) => {
      if (!valid.has(f)) {
        fs.unlinkSync(path.join(AUDIO_DIR, f));
        removed++;
        console.log(`🧹 Removed orphaned file: ${f}`);
      }
    });
}
console.log(`✅ Clean-up finished. Removed ${removed} orphaned file(s), kept ${valid.size}.`);
