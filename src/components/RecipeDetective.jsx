import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Dices, CheckCircle, Search } from 'lucide-react';
import soundEngine from '../utils/audio';
import { narrationScript } from '../data/narration';

// ---------------------------------------------------------------------------
// Station C - Recipe Detective
// A recipe was scaled up, but ONE ingredient was scaled the wrong way.
// Step 1: tap the suspicious row.  Step 2: pick the correct amount.
// ---------------------------------------------------------------------------

const CASES = [
  {
    title: 'Robo & Alex\'s Mango Cookies', emoji: '🍪', from: 2, to: 6, k: 3,
    rows: [
      { name: 'Flour', emoji: '🌾', unit: 'g', base: 100, shown: 300 },
      { name: 'Sugar', emoji: '🍬', unit: 'g', base: 50, shown: 150 },
      { name: 'Butter', emoji: '🧈', unit: 'g', base: 60, shown: 120, wrong: true, slip: 'used × 2 instead of × 3' },
      { name: 'Eggs', emoji: '🥚', unit: '', base: 1, shown: 3 },
    ],
  },
  {
    title: 'Café Pancake Party', emoji: '🥞', from: 3, to: 12, k: 4,
    rows: [
      { name: 'Milk', emoji: '🥛', unit: 'ml', base: 200, shown: 800 },
      { name: 'Flour', emoji: '🌾', unit: 'g', base: 150, shown: 600 },
      { name: 'Eggs', emoji: '🥚', unit: '', base: 2, shown: 6, wrong: true, slip: 'added +4 instead of multiplying by × 4' },
      { name: 'Sugar', emoji: '🍬', unit: 'g', base: 30, shown: 120 },
    ],
  },
  {
    title: 'Robo\'s Bubble Tea Stall', emoji: '🧋', from: 2, to: 10, k: 5,
    rows: [
      { name: 'Tea', emoji: '🍵', unit: 'ml', base: 150, shown: 750 },
      { name: 'Milk', emoji: '🥛', unit: 'ml', base: 100, shown: 500 },
      { name: 'Syrup', emoji: '🍯', unit: 'ml', base: 20, shown: 80, wrong: true, slip: 'used × 4 instead of × 5' },
      { name: 'Ice', emoji: '🧊', unit: 'cubes', base: 6, shown: 30 },
    ],
  },
  {
    title: 'School Picnic Fried Rice', emoji: '🍳', from: 4, to: 8, k: 2,
    rows: [
      { name: 'Rice', emoji: '🍚', unit: 'cups', base: 3, shown: 6 },
      { name: 'Eggs', emoji: '🥚', unit: '', base: 2, shown: 4 },
      { name: 'Peas', emoji: '🫛', unit: 'g', base: 100, shown: 300, wrong: true, slip: 'used × 3 instead of × 2' },
      { name: 'Soy sauce', emoji: '🥢', unit: 'tbsp', base: 3, shown: 6 },
    ],
  },
  {
    title: 'School Art Mural Green Paint', emoji: '🎨', from: 2, to: 12, k: 6,
    rows: [
      { name: 'Blue', emoji: '🔵', unit: 'ml', base: 15, shown: 90 },
      { name: 'Yellow', emoji: '🟡', unit: 'ml', base: 25, shown: 150 },
      { name: 'White', emoji: '⚪', unit: 'ml', base: 10, shown: 40, wrong: true, slip: 'used × 4 instead of × 6' },
      { name: 'Water', emoji: '💧', unit: 'ml', base: 5, shown: 30 },
    ],
  },
];

const fmt = (n, unit) => `${n}${unit ? ` ${unit}` : ''}`;

const buildChips = (row, k, caseIndex) => {
  const correct = row.base * k;
  const chips = [correct, row.base * (k + 1), row.base * (k - 1)];
  // deterministic rotation so the correct chip is not always first
  const shift = caseIndex % 3;
  return chips.map((_, i) => chips[(i + shift) % 3]);
};

export const RecipeDetective = () => {
  const [caseIndex, setCaseIndex] = useState(0);
  const [found, setFound] = useState(false); // step 1 done
  const [fixed, setFixed] = useState(false); // step 2 done
  const [wrongTap, setWrongTap] = useState(null); // index of a row tapped by mistake
  const [wrongChip, setWrongChip] = useState(null);
  const [tries, setTries] = useState(0);

  const c = CASES[caseIndex];
  const badIndex = c.rows.findIndex((r) => r.wrong);
  const badRow = c.rows[badIndex];
  const chips = buildChips(badRow, c.k, caseIndex);

  useEffect(() => {
    setFound(false);
    setFixed(false);
    setWrongTap(null);
    setWrongChip(null);
    setTries(0);
  }, [caseIndex]);

  const tapRow = (idx) => {
    if (found) return;
    if (idx === badIndex) {
      setFound(true);
      setWrongTap(null);
    } else {
      setWrongTap(idx);
      setTries((t) => t + 1);
      soundEngine.playText(narrationScript.incorrect_try_again);
    }
  };

  const pickChip = (value) => {
    if (fixed) return;
    if (value === badRow.base * c.k) {
      setFixed(true);
      setWrongChip(null);
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.6 } });
      soundEngine.playText(narrationScript.correct_cheer);
    } else {
      setWrongChip(value);
      soundEngine.playText(narrationScript.incorrect_try_again);
    }
  };

  const next = () => setCaseIndex((prev) => (prev + 1) % CASES.length);

  let status;
  if (fixed) {
    status = { tone: 'good', text: `Case solved! ${badRow.base} × ${c.k} = ${badRow.base * c.k}, not ${badRow.shown} (${badRow.slip}).` };
  } else if (found) {
    status = wrongChip !== null
      ? { tone: 'bad', text: `Not quite. Multiply ${badRow.base} by ${c.k}: every ingredient uses the same multiplier.` }
      : { tone: 'info', text: `Found it! ${badRow.name} is off. What should ${badRow.base} × ${c.k} be?` };
  } else if (wrongTap !== null) {
    const r = c.rows[wrongTap];
    status = { tone: 'bad', text: `${r.name} is fine: ${r.base} × ${c.k} = ${r.shown}. Look for the odd one out!` };
  } else {
    status = { tone: 'info', text: 'Every amount should be × ' + c.k + '. Tap the row that does not follow the rule.' };
  }

  const toneClass = {
    good: 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-glow-green animate-ratio-pop',
    bad: 'bg-[#161129] border-pink-500/70 text-pink-300',
    info: 'bg-[#161129] border-amber-400/80 text-amber-400 shadow-glow-gold',
  }[status.tone];

  return (
    <div className="w-full max-w-lg flex flex-col items-center space-y-2 select-none">
      {/* Case number & swap */}
      <div className="w-full flex items-center justify-between">
        <span className="text-xs md:text-sm font-black text-cyan-300">Case #{caseIndex + 1}</span>
        <button
          onClick={next}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3.5 py-1 rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer shadow-glow-gold transition-transform hover:scale-105"
        >
          <Dices className="w-4 h-4" />
          <span>New Case 🎲</span>
        </button>
      </div>

      {/* Case file */}
      <div className="bg-[#161129] border border-purple-700/60 px-4 py-1.5 rounded-2xl w-full text-center shadow-md">
        <p className="text-xs md:text-sm font-black text-emerald-400">
          {c.emoji} {c.title}: the recipe is for {c.from}. To serve {c.to}, multiply by {c.k}.
        </p>
      </div>

      {/* Ratio table */}
      <div className="w-full bg-[#130E26]/90 border-2 border-purple-800/60 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[1.2fr_1fr_auto_1fr] items-center px-3 py-1.5 bg-purple-950/60 text-[11px] md:text-xs font-black text-purple-300 uppercase tracking-wider">
          <span>Ingredient</span>
          <span className="text-center">For {c.from}</span>
          <span className="text-center px-2 text-amber-400">× {c.k}</span>
          <span className="text-center">For {c.to}</span>
        </div>

        {c.rows.map((r, idx) => {
          const isBad = idx === badIndex;
          const showFixed = isBad && fixed;
          const flaggedWrong = wrongTap === idx;
          let rowStyle = 'border-transparent hover:bg-purple-900/30';
          if (showFixed) rowStyle = 'bg-emerald-950/50 border-emerald-500/60';
          else if (isBad && found) rowStyle = 'bg-amber-950/40 border-amber-400/70';
          else if (flaggedWrong) rowStyle = 'bg-pink-950/40 border-pink-500/70';

          return (
            <button
              key={r.name}
              onClick={() => tapRow(idx)}
              className={`w-full grid grid-cols-[1.2fr_1fr_auto_1fr] items-center px-3 py-1.5 md:py-2 border-y text-left transition-colors cursor-pointer ${rowStyle}`}
            >
              <span className="text-xs md:text-sm font-black text-white flex items-center gap-1.5 truncate">
                <span className="text-base md:text-lg">{r.emoji}</span>
                {r.name}
              </span>
              <span className="text-xs md:text-sm font-extrabold text-purple-200 text-center">{fmt(r.base, r.unit)}</span>
              <span className="px-2 text-amber-400 font-black">→</span>
              <span
                className={`text-xs md:text-sm font-black text-center ${
                  showFixed ? 'text-emerald-300' : isBad && found ? 'text-amber-300' : 'text-cyan-300'
                }`}
              >
                {showFixed ? fmt(r.base * c.k, r.unit) : isBad && found ? '?' : fmt(r.shown, r.unit)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step 2: choose the correct amount */}
      {found && !fixed && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Search className="w-4 h-4 text-amber-400" />
          <span className="text-xs md:text-sm font-black text-purple-200">{badRow.name} should be:</span>
          {chips.map((v) => (
            <button
              key={v}
              onClick={() => pickChip(v)}
              className={`px-4 py-1.5 rounded-2xl text-sm md:text-base font-black transition-all cursor-pointer ${
                wrongChip === v
                  ? 'bg-pink-950 text-pink-300 border border-pink-500/70 opacity-70'
                  : 'bg-[#1A1333] text-purple-200 hover:text-white border border-purple-700/60 hover:scale-105'
              }`}
            >
              {fmt(v, badRow.unit)}
            </button>
          ))}
        </div>
      )}

      {/* Live status */}
      <div
        key={status.text}
        className={`border-2 px-4 py-1.5 rounded-2xl text-xs md:text-sm font-black text-center w-full flex items-center justify-center gap-2 ${toneClass}`}
      >
        {fixed && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
        <span>{status.text}</span>
      </div>
    </div>
  );
};

export default RecipeDetective;
