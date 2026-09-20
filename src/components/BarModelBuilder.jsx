import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Plus, Minus, Dices, CheckCircle } from 'lucide-react';
import soundEngine from '../utils/audio';
import { narrationScript } from '../data/narration';

// ---------------------------------------------------------------------------
// Station B - Bar Model Builder
// Step 1: build the bars (units) so they match the ratio.
// Step 2: choose the value of 1 unit so the whole model equals the total.
// ---------------------------------------------------------------------------

const PUZZLES = [
  { a: 'Robo', b: 'Alex', ra: 3, rb: 5, total: 40, thing: 'stickers' },
  { a: 'Mei', b: 'Lin', ra: 2, rb: 3, total: 45, thing: 'sweets' },
  { a: 'Ravi', b: 'Sam', ra: 4, rb: 1, total: 30, thing: 'marbles' },
  { a: 'Red', b: 'Blue', ra: 5, rb: 7, total: 60, thing: 'pupils in the teams' },
  { a: 'Jia', b: 'Hao', ra: 3, rb: 4, total: 56, thing: 'kueh' },
];

const MAX_UNITS = 8;
const MAX_VALUE = 20;

const ROW_STYLE = {
  a: { block: 'bg-cyan-500/70 border-cyan-300', text: 'text-cyan-300' },
  b: { block: 'bg-amber-400/80 border-amber-200', text: 'text-amber-300' },
};

const UnitStepper = ({ value, onChange, disabled }) => (
  <div className="flex items-center gap-0.5 shrink-0">
    <button
      onClick={() => onChange(value - 1)}
      disabled={disabled || value <= 1}
      className="p-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-purple-200 disabled:opacity-30 cursor-pointer border border-[#3B2D6B]"
      title="Remove a unit"
    >
      <Minus className="w-4 h-4" />
    </button>
    <button
      onClick={() => onChange(value + 1)}
      disabled={disabled || value >= MAX_UNITS}
      className="p-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-purple-200 disabled:opacity-30 cursor-pointer border border-[#3B2D6B]"
      title="Add a unit"
    >
      <Plus className="w-4 h-4" />
    </button>
  </div>
);

export const BarModelBuilder = () => {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [units, setUnits] = useState({ a: 1, b: 1 });
  const [unitValue, setUnitValue] = useState(1);

  const puzzle = PUZZLES[puzzleIndex];
  const built = units.a === puzzle.ra && units.b === puzzle.rb;
  const totalUnits = units.a + units.b;
  const currentTotal = totalUnits * unitValue;
  const solved = built && currentTotal === puzzle.total;

  useEffect(() => {
    setUnits({ a: 1, b: 1 });
    setUnitValue(1);
  }, [puzzleIndex]);

  // celebrate the first time each puzzle is solved
  const lastSolved = useRef(false);
  useEffect(() => {
    if (solved && !lastSolved.current) {
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.6 } });
      soundEngine.playText(narrationScript.correct_cheer);
    }
    lastSolved.current = solved;
  }, [solved]);

  const setUnitCount = (key, v) => {
    soundEngine.playDragClick();
    setUnits((prev) => ({ ...prev, [key]: Math.max(1, Math.min(MAX_UNITS, v)) }));
  };

  const changeValue = (v) => {
    soundEngine.playDragClick();
    setUnitValue(Math.max(1, Math.min(MAX_VALUE, v)));
  };

  const nextPuzzle = () => setPuzzleIndex((prev) => (prev + 1) % PUZZLES.length);

  const rows = [
    { key: 'a', name: puzzle.a, count: units.a },
    { key: 'b', name: puzzle.b, count: units.b },
  ];

  let status;
  if (!built) {
    status = { tone: 'info', text: `Step 1: make the bars ${puzzle.ra} : ${puzzle.rb}. Yours are ${units.a} : ${units.b}.` };
  } else if (solved) {
    status = {
      tone: 'good',
      text: `Correct! ${totalUnits} units × ${unitValue} = ${puzzle.total}. ${puzzle.a} gets ${puzzle.ra * unitValue}, ${puzzle.b} gets ${puzzle.rb * unitValue}!`,
    };
  } else {
    const dir = currentTotal < puzzle.total ? 'too small' : 'too big';
    status = { tone: 'bad', text: `Step 2: ${totalUnits} units × ${unitValue} = ${currentTotal}. That is ${dir}. We need ${puzzle.total}!` };
  }

  const toneClass = {
    good: 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-glow-green animate-ratio-pop',
    bad: 'bg-[#161129] border-pink-500/70 text-pink-300',
    info: 'bg-[#161129] border-amber-400/80 text-amber-400 shadow-glow-gold',
  }[status.tone];

  return (
    <div className="w-full max-w-xl flex flex-col items-center space-y-2 select-none">
      {/* Puzzle number & swap */}
      <div className="w-full flex items-center justify-between">
        <span className="text-xs md:text-sm font-black text-cyan-300">Puzzle #{puzzleIndex + 1}</span>
        <button
          onClick={nextPuzzle}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3.5 py-1 rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer shadow-glow-gold transition-transform hover:scale-105"
        >
          <Dices className="w-4 h-4" />
          <span>New Puzzle 🎲</span>
        </button>
      </div>

      {/* Story line */}
      <div className="bg-[#161129] border border-purple-700/60 px-4 py-1.5 rounded-2xl w-full text-center shadow-md">
        <p className="text-xs md:text-sm font-black text-emerald-400">
          {puzzle.a} and {puzzle.b} share {puzzle.total} {puzzle.thing} in the ratio {puzzle.ra} : {puzzle.rb}.
        </p>
      </div>

      {/* Step chips */}
      <div className="flex items-center gap-2 text-[11px] md:text-xs font-black">
        <span className={`px-3 py-0.5 rounded-full border ${built ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300' : 'bg-amber-400 border-amber-300 text-slate-950'}`}>
          {built ? '✓' : '1'} Build the bars
        </span>
        <span className={`px-3 py-0.5 rounded-full border ${solved ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300' : built ? 'bg-amber-400 border-amber-300 text-slate-950' : 'bg-[#1A1333] border-purple-700/60 text-purple-300'}`}>
          {solved ? '✓' : '2'} Find 1 unit
        </span>
      </div>

      {/* Bar model workspace */}
      <div className="w-full bg-[#130E26]/90 border-2 border-purple-800/60 rounded-2xl px-3 py-2.5 space-y-2">
        {rows.map((row) => {
          const style = ROW_STYLE[row.key];
          return (
            <div key={row.key} className="flex items-center gap-2">
              <span className={`w-14 md:w-16 text-xs md:text-sm font-black truncate ${style.text}`}>{row.name}</span>
              <UnitStepper value={row.count} onChange={(v) => setUnitCount(row.key, v)} disabled={built} />
              <div className="flex-1 flex items-center gap-1 min-w-0">
                {Array.from({ length: row.count }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-9 md:h-10 flex-1 max-w-11 rounded-lg border-2 flex items-center justify-center text-xs md:text-sm font-black text-slate-950 bar-grow ${style.block}`}
                  >
                    {built ? unitValue : ''}
                  </div>
                ))}
              </div>
              <span className={`w-14 text-right text-xs md:text-sm font-black ${built ? style.text : 'text-purple-700'}`}>
                {built ? `= ${row.count * unitValue}` : `${row.count} unit${row.count > 1 ? 's' : ''}`}
              </span>
            </div>
          );
        })}

        {/* Value of 1 unit control */}
        <div className={`flex items-center gap-2 pt-1 border-t border-purple-800/50 transition-opacity ${built ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
          <span className="text-xs md:text-sm font-black text-purple-200 shrink-0">1 unit =</span>
          <button
            onClick={() => changeValue(unitValue - 1)}
            className="p-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-purple-200 cursor-pointer border border-[#3B2D6B]"
            title="Smaller unit"
          >
            <Minus className="w-4 h-4" />
          </button>
          <input
            type="range"
            min="1"
            max={MAX_VALUE}
            value={unitValue}
            onChange={(e) => changeValue(Number(e.target.value))}
            className="flex-1 accent-amber-400 cursor-pointer"
            aria-label="Value of 1 unit"
          />
          <button
            onClick={() => changeValue(unitValue + 1)}
            className="p-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-purple-200 cursor-pointer border border-[#3B2D6B]"
            title="Bigger unit"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="w-9 text-center text-sm md:text-base font-black text-amber-400 bg-[#161129] px-2 py-0.5 rounded-lg border border-amber-500/50">
            {unitValue}
          </span>
        </div>
      </div>

      {/* Live status */}
      <div
        key={status.text}
        className={`border-2 px-4 py-1.5 rounded-2xl text-xs md:text-sm font-black text-center w-full flex items-center justify-center gap-2 ${toneClass}`}
      >
        {solved && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
        <span>{status.text}</span>
      </div>
    </div>
  );
};

export default BarModelBuilder;
