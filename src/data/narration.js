// Narration Script Dictionary (SINGLE SOURCE OF TRUTH for spoken lines)
// - The text here is exactly what appears on screen (paragraphs & questions only, never titles).
// - Symbols (":", "×", "$", "cm" ...) are converted to spoken words by src/utils/speech.js
//   right before text-to-speech, so on-screen text and audio stay in 1:1 parity.
// - Every key has a voice style in `narrationStyles` (see AUDIO_PIPELINE.md).

import { storySlides } from './storySlides.js';

export const narrationScript = {
  // Intro & Wonder Phase
  home_intro: "Welcome to Real-Life Ratio Problems! Ready to mix, share and scale like a pro? Let's roll!",
  wonder_prompt: "Robo makes a mango shake with 1 scoop of mango and 2 scoops of milk. Alex says: \"If you use 2 scoops of mango and 4 scoops of milk, the shake will taste stronger, because there is more mango!\" Is that actually true? Remember, same ratio means same taste. Multiply both parts by the same number and the ratio never changes!",
  wonder_teaser: "What if you added 2 more scoops of mango but no extra milk? Would the shake still taste the same?",

  // Story Phase - 4 slides (paragraph only, titles are never narrated)
  story_slide_1: storySlides[0].narrative,
  story_slide_2: storySlides[1].narrative,
  story_slide_3: storySlides[2].narrative,
  story_slide_4: storySlides[3].narrative,

  // Simulate Phase Stations
  station_a_intro: "Welcome to the Mango Shake Mixer! Add scoops of mango and milk to match the target shade. Use a different amount, because same ratio means same taste!",
  station_b_intro: "Station B: Bar Model Builder! Build the bars to match the ratio, then find the value of 1 unit to share the total.",
  station_c_intro: "Station C: Recipe Detective! One ingredient was scaled up the wrong way. Tap it, then fix the amount!",
  station_d_intro: "Station D: Real-World Ratio Lab! Scale bubble tea, maps, rice and teams. Pick a multiplier to reach each mission goal!",

  // Practice & Session Narrations
  practice_welcome: "Choose your world on the map! Beat each world to unlock the next. Earn stars and XP!",
  correct_cheer: "Awesome job! You got it right!",
  incorrect_try_again: "Not quite. Check both parts of the ratio and try again!",
  out_of_hearts: "Oh no! Out of hearts! Don't worry, try again to master this world!",
  world_complete: "Congratulations! You completed the world and earned new stars!",

  // Reflect Phase Narrations (on-screen text is read from here)
  reflect_intro: "Your Performance! Amazing work! Let's reflect on what you learned.",
  reflect_q1: "What does a ratio tell us?",
  reflect_a1: "A ratio compares two amounts of the same kind, like 2 scoops of mango to 3 scoops of milk. The order matters!",
  reflect_q2: "How do you write a ratio in simplest form?",
  reflect_a2: "Divide both parts by the same number until nothing more divides both. For example, 12 : 18 becomes 2 : 3.",
  reflect_q3: "How do you find an equivalent ratio?",
  reflect_a3: "Multiply or divide both parts by the same number. So 2 : 3 is the same as 4 : 6 and 6 : 9.",
  reflect_q4: "How do you share an amount in a given ratio?",
  reflect_a4: "Add the parts to get the total units, divide the amount by the total units to find 1 unit, then multiply by each part!",
  reflect_q5: "What do you do when only one amount is known?",
  reflect_a5: "Match the known amount to its units, divide to find 1 unit, then multiply to find the other amount!",
  reflect_q6: "Where do you see ratios in real life?",
  reflect_a6: "In recipes, map scales, paint mixes, sharing money, model trains, and even bubble tea!",
};

// Voice style per key (maps to ElevenLabs voice settings in src/utils/speech.js)
export const narrationStyles = {
  home_intro: 'encouragement',
  wonder_prompt: 'question',
  wonder_teaser: 'question',
  story_slide_1: 'statement',
  story_slide_2: 'emphasis',
  story_slide_3: 'statement',
  story_slide_4: 'emphasis',
  station_a_intro: 'instruction',
  station_b_intro: 'instruction',
  station_c_intro: 'instruction',
  station_d_intro: 'instruction',
  practice_welcome: 'encouragement',
  correct_cheer: 'celebration',
  incorrect_try_again: 'encouragement',
  out_of_hearts: 'encouragement',
  world_complete: 'celebration',
  reflect_intro: 'encouragement',
  reflect_q1: 'question', reflect_a1: 'statement',
  reflect_q2: 'question', reflect_a2: 'statement',
  reflect_q3: 'question', reflect_a3: 'statement',
  reflect_q4: 'question', reflect_a4: 'statement',
  reflect_q5: 'question', reflect_a5: 'statement',
  reflect_q6: 'question', reflect_a6: 'statement',
};

export default narrationScript;
