# Real-Life Ratio Problems (Grade 6)

Gamified math module built with React + Vite + Tailwind + Zustand. Same journey as the Angles module:
**Home > Wonder > Story > Simulate (4 stations) > Practice (10 worlds x 10 questions) > Reflect**.

## Run it
```bash
npm install
npm run generate:audio   # one-time: creates all ElevenLabs .mp3 files (see AUDIO_PIPELINE.md)
npm run dev
```
Without `generate:audio` the app still speaks: missing lines are requested live from ElevenLabs.

## What is in each stage
| Stage | Content |
|-------|---------|
| Wonder | Mango-shake taste rig: does 2 : 4 taste different from 1 : 2? |
| Story | 4 slides: meet ratios, equivalent ratios, sharing with bar models, the unit detective |
| Simulate A | **Ratio Mixer**: match 5 target shakes using a different amount (same ratio, same shade) |
| Simulate B | **Bar Model Builder**: build the unit bars, then set the value of 1 unit to share the total |
| Simulate C | **Recipe Detective**: find the ingredient that was scaled the wrong way and fix it |
| Simulate D | **Real-World Ratio Lab**: bubble tea, map scale, rice and teams with batch multipliers |
| Practice | 10 worlds: writing ratios, simplest form, equivalent ratios, part/whole, sharing, one part known, difference, three-part ratios, recipes/maps/prices, multi-step Singapore problems |

## Editing content
- `src/data/storySlides.js`, `src/data/narration.js`, `src/data/worlds.js`, `src/data/questionBank.js`
- Story images: `public/assets/images/story_slide_1..4.png`
- Audio: see `AUDIO_PIPELINE.md`
