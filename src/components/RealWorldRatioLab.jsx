import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Target, CheckCircle } from 'lucide-react';
import soundEngine from '../utils/audio';
import { narrationScript } from '../data/narration';

// ---------------------------------------------------------------------------
// Station D - Real-World Ratio Lab
// Pick a real-life scene, then choose the multiplier (number of batches).
// Each batch repeats the base ratio, so both parts grow by the SAME multiplier.
// Reach the mission goal to earn the confetti.
// ---------------------------------------------------------------------------

const SCENARIOS = [
  {
    id: 'tea', name: 'Bubble Tea 🧋',
    a: { label: 'Tea', count: 2, icon: '🍵', unit: 'cups' },
    b: { label: 'Milk', count: 3, icon: '🥛', unit: 'cups' },
    mission: 'The party needs 8 cups of tea. Scale the recipe to find the milk!',
    goalSide: 'a', goal: 8, findSide: 'b',
  },
  {
    id: 'map', name: 'Map Scale 🗺️',
    a: { label: 'On the map', count: 1, icon: '📏', unit: 'cm' },
    b: { label: 'In real life', count: 5, icon: null, unit: 'km' },
    mission: 'The park is 30 km away in real life. How far is it on the map?',
    goalSide: 'b', goal: 30, findSide: 'a',
  },
  {
    id: 'rice', name: 'Rice & Water 🍚',
    a: { label: 'Rice', count: 1, icon: '🍚', unit: 'cups' },
    b: { label: 'Water', count: 2, icon: '💧', unit: 'cups' },
    mission: 'You are cooking 5 cups of rice. Scale the recipe to find the water!',
    goalSide: 'a', goal: 5, findSide: 'b',
  },
  {
    id: 'team', name: 'School Teams 🏫',
    a: { label: 'Boys', count: 3, icon: '👦', unit: '' },
    b: { label: 'Girls', count: 2, icon: '👧', unit: '' },
    mission: 'The team has 12 girls. Keep the ratio to find how many boys!',
    goalSide: 'b', goal: 12, findSide: 'a',
  },
];

const MULTIPLIERS = [1, 2, 3, 4, 5, 6];

const withUnit = (n, unit) => `${n}${unit ? ` ${unit}` : ''}`;

const BatchRow = ({ part, k, tone }) => {
  const border = tone === 'a' ? 'border-cyan-400/70 bg-cyan-950/30' : 'border-amber-400/70 bg-amber-950/25';
  const text = tone === 'a' ? 'text-cyan-300' : 'text-amber-300';
  return (
    <div className="flex items-center gap-2 w-full">
      <span className={`w-20 md:w-24 text-right text-xs md:text-sm font-black shrink-0 ${text}`}>{part.label}</span>
      <div className="flex flex-wrap items-center gap-1.5 flex-1 min-h-9">
        {Array.from({ length: k }).map((_, i) => (
          <div
            key={i}
            className={`px-1.5 py-0.5 rounded-lg border-2 text-base md:text-lg leading-none flex items-center gap-0.5 animate-ratio-pop ${border}`}
          >
            {part.icon && part.count <= 3 ? (
              Array.from({ length: part.count }).map((__, j) => <span key={j}>{part.icon}</span>)
            ) : (
              <span className={`text-xs md:text-sm font-black ${text}`}>
                {part.icon ? `${part.icon} ` : ''}{part.count} {part.unit}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const RealWorldRatioLab = () => {
  const [scenarioId, setScenarioId] = useState('tea');
  const [k, setK] = useState(1);

  const sc = SCENARIOS.find((s) => s.id === scenarioId);
  const aTotal = sc.a.count * k;
  const bTotal = sc.b.count * k;
  const goalNow = (sc.goalSide === 'a' ? aTotal : bTotal);
  const found = sc[sc.findSide];
  const foundTotal = sc.findSide === 'a' ? aTotal : bTotal;
  const solved = goalNow === sc.goal;

  useEffect(() => {
    setK(1);
  }, [scenarioId]);

  const wasSolved = useRef(false);
  useEffect(() => {
    if (solved && !wasSolved.current) {
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.6 } });
      soundEngine.playText(narrationScript.correct_cheer);
    }
    wasSolved.current = solved;
  }, [solved]);

  const pickK = (v) => {
    soundEngine.playDragClick();
    setK(v);
  };

  const goalPart = sc[sc.goalSide];

  return (
    <div className="w-full flex flex-col items-center space-y-2 select-none">
      {/* Scenario pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {SCENARIOS.map((s) => {
          const isSelected = scenarioId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setScenarioId(s.id)}
              className={`px-4 py-2 rounded-2xl font-black text-sm md:text-base flex items-center gap-1.5 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 shadow-glow-gold scale-105'
                  : 'bg-[#130E26]/90 text-purple-200 hover:text-white border border-purple-800/60'
              }`}
            >
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* Multiplier selector */}
      <div className="flex items-center gap-3 bg-[#130E26]/90 border border-purple-800/60 px-5 py-2 rounded-2xl text-sm md:text-base font-black text-purple-200 shadow-md">
        <span>Number of batches:</span>
        {MULTIPLIERS.map((m) => (
          <button
            key={m}
            onClick={() => pickK(m)}
            className={`w-9 h-9 rounded-xl font-black text-sm md:text-base transition-all cursor-pointer ${
              k === m
                ? 'bg-amber-400 text-slate-950 font-black scale-110 shadow-glow-gold'
                : 'bg-[#1A1333] text-purple-300 hover:text-white border border-purple-700/60'
            }`}
          >
            ×{m}
          </button>
        ))}
      </div>

      {/* Scene: k copies of the base recipe */}
      <div className="w-full max-w-3xl bg-[#130E26]/90 border-2 border-purple-800/60 rounded-2xl px-3 py-2.5 space-y-1.5">
        <BatchRow part={sc.a} k={k} tone="a" />
        <BatchRow part={sc.b} k={k} tone="b" />
      </div>

      {/* Live ratio readout */}
      <div className="bg-[#161129] border-2 border-amber-400/80 px-5 py-1.5 rounded-full text-amber-400 font-black text-xs md:text-sm shadow-glow-gold text-center">
        {sc.a.label} {sc.a.count} × {k} = {aTotal} : {sc.b.label} {sc.b.count} × {k} = {bTotal} → still {sc.a.count} : {sc.b.count}
      </div>

      {/* Mission */}
      <div
        key={`${scenarioId}-${solved}`}
        className={`w-full max-w-3xl border-2 px-4 py-1.5 rounded-2xl text-xs md:text-sm font-black flex items-center justify-center gap-2 text-center ${
          solved
            ? 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-glow-green animate-ratio-pop'
            : 'bg-[#161129] border-purple-700/60 text-purple-200'
        }`}
      >
        {solved ? <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> : <Target className="w-4 h-4 text-amber-400 shrink-0" />}
        <span>
          {solved
            ? `Mission complete! ×${k} batches gives ${withUnit(goalNow, goalPart.unit)} ${goalPart.label.toLowerCase()} and ${withUnit(foundTotal, found.unit)} ${found.label.toLowerCase()}!`
            : `Mission: ${sc.mission} (Goal: ${withUnit(sc.goal, goalPart.unit)}. Now: ${withUnit(goalNow, goalPart.unit)}.)`}
        </span>
      </div>
    </div>
  );
};

export default RealWorldRatioLab;
