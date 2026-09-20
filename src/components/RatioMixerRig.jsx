import React, { useEffect, useId, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Plus, Minus, RotateCcw, CheckCircle2 } from 'lucide-react';
import soundEngine from '../utils/audio';
import { narrationScript } from '../data/narration';

// ---------------------------------------------------------------------------
// Mango Shake Mixer: the stronger the mango share, the deeper the colour.
// Same RATIO => same shade, no matter how big the batch is.
// Used in the Wonder stage (compare mode) and Station A (target-match mode).
// ---------------------------------------------------------------------------

const MAX_SCOOPS = 12;
const MANGO_RGB = [255, 138, 0];
const MILK_RGB = [255, 244, 222];

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

export const simplify = (a, b) => {
  if (a === 0 && b === 0) return [0, 0];
  const g = gcd(a, b);
  return [a / g, b / g];
};

const isEquivalent = (a1, b1, a2, b2) => a1 + b1 > 0 && a2 + b2 > 0 && a1 * b2 === b1 * a2;

const shakeColor = (a, b) => {
  const share = a + b === 0 ? 0 : a / (a + b);
  const t = Math.sqrt(share); // gentle curve so different ratios look clearly different
  const c = MILK_RGB.map((m, i) => Math.round(m + (MANGO_RGB[i] - m) * t));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
};

const TARGETS = [
  { a: 2, b: 3 },
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 2 },
  { a: 3, b: 1 },
];

const Glass = ({ a, b, height }) => {
  const uid = useId().replace(/:/g, '');
  const total = a + b;
  const maxH = 128;
  const liquidH = total === 0 ? 0 : Math.max(26, maxH * Math.min(1, total / 14));
  const glassPath = 'M14 22 L106 22 L97 156 Q96 165 88 165 L32 165 Q24 165 23 156 Z';

  return (
    <svg viewBox="0 0 120 172" style={{ height }} className="w-auto shrink-0 overflow-visible">
      <defs>
        <clipPath id={`clip-${uid}`}>
          <path d={glassPath} />
        </clipPath>
        <linearGradient id={`shine-${uid}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* straw */}
      <line x1="82" y1="4" x2="68" y2="132" stroke="#F43F5E" strokeWidth="7" strokeLinecap="round" />

      <g clipPath={`url(#clip-${uid})`}>
        <rect x="0" y="0" width="120" height="172" fill="rgba(255,255,255,0.04)" />
        <rect
          x="0"
          y={165 - liquidH}
          width="120"
          height={liquidH}
          fill={shakeColor(a, b)}
          className="liquid-rise"
        />
        {total > 0 && (
          <rect x="0" y={165 - liquidH} width="120" height="5" fill="rgba(255,255,255,0.55)" className="liquid-rise" />
        )}
      </g>

      <path d={glassPath} fill={`url(#shine-${uid})`} stroke="rgba(255,255,255,0.8)" strokeWidth="3.5" strokeLinejoin="round" />
      <ellipse cx="60" cy="22" rx="46" ry="5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />

      {total === 0 && (
        <text x="60" y="105" textAnchor="middle" fill="#C4B5FD" fontSize="13" fontWeight="800" fontFamily="Outfit">
          Add scoops!
        </text>
      )}
    </svg>
  );
};

const Stepper = ({ icon, value, onChange, label }) => (
  <div className="flex items-center gap-1 bg-[#161129] p-1 rounded-xl border border-[#3B2D6B]" aria-label={label}>
    <span className="text-lg leading-none pl-1">{icon}</span>
    <button
      onClick={() => onChange(value - 1)}
      disabled={value <= 0}
      className="p-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-purple-200 disabled:opacity-40 cursor-pointer"
      title={`Fewer ${label}`}
    >
      <Minus className="w-4 h-4" />
    </button>
    <span className="w-6 text-center text-sm md:text-base font-black text-amber-400">{value}</span>
    <button
      onClick={() => onChange(value + 1)}
      disabled={value >= MAX_SCOOPS}
      className="p-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-purple-200 disabled:opacity-40 cursor-pointer"
      title={`More ${label}`}
    >
      <Plus className="w-4 h-4" />
    </button>
  </div>
);

const RatioLine = ({ a, b, dim = false, showSimplest = true }) => {
  const [sa, sb] = simplify(a, b);
  return (
    <div className="flex flex-col items-center leading-tight">
      <span className={`text-sm md:text-base font-black ${dim ? 'text-purple-200' : 'text-white'}`}>
        🥭 {a} : {b} 🥛
      </span>
      {showSimplest && (
        <span className="text-[11px] md:text-xs font-extrabold text-purple-300">
          {a + b === 0 ? 'no scoops yet' : `simplest form ${sa} : ${sb}`}
        </span>
      )}
    </div>
  );
};

export const RatioMixerRig = ({
  mode = 'compare', // 'compare' (Wonder) | 'target' (Station A)
  compact = false,
  largeCircle = false,
}) => {
  const compactOnly = compact && !largeCircle; // Wonder card: keep it short
  const glassH = largeCircle ? 150 : compact ? 92 : 130;

  // compare mode: Robo's fixed recipe vs. Alex's adjustable shake
  const [alex, setAlex] = useState({ a: 2, b: 4 });
  // target mode
  const [targetIdx, setTargetIdx] = useState(0);
  const [mine, setMine] = useState({ a: 1, b: 1 });
  const [matched, setMatched] = useState([]);

  const ref = mode === 'compare' ? { a: 1, b: 2 } : TARGETS[targetIdx];
  const me = mode === 'compare' ? alex : mine;
  const setMe = mode === 'compare' ? setAlex : setMine;

  const same = isEquivalent(me.a, me.b, ref.a, ref.b);
  const identical = me.a === ref.a && me.b === ref.b;
  const success = same && !identical;

  // celebrate once every time the shake newly becomes an equivalent ratio
  const wasSuccess = useRef(null); // null = first render (never celebrate on mount)
  useEffect(() => {
    if (success && wasSuccess.current === false) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      soundEngine.playText(narrationScript.correct_cheer);
      if (mode === 'target') {
        setMatched((prev) => (prev.includes(targetIdx) ? prev : [...prev, targetIdx]));
      }
    }
    wasSuccess.current = success;
  }, [success]);

  const update = (key, value) => {
    const v = Math.max(0, Math.min(MAX_SCOOPS, value));
    soundEngine.playDragClick();
    setMe((prev) => ({ ...prev, [key]: v }));
  };

  const pickTarget = (idx) => {
    setTargetIdx(idx);
    setMine({ a: 1, b: 1 });
    wasSuccess.current = false;
  };

  const reset = () => {
    if (mode === 'compare') setAlex({ a: 2, b: 4 });
    else setMine({ a: 1, b: 1 });
  };

  // stronger / weaker (mango share comparison)
  const shareMe = me.a * (ref.a + ref.b);
  const shareRef = ref.a * (me.a + me.b);
  const strength = shareMe > shareRef ? 'stronger' : 'weaker';

  let status;
  if (me.a + me.b === 0) {
    status = { tone: 'info', text: 'Add some scoops to your shake!' };
  } else if (success) {
    const [sa, sb] = simplify(me.a, me.b);
    status = { tone: 'good', text: `Same taste! ${me.a} : ${me.b} = ${sa} : ${sb} = ${ref.a} : ${ref.b}` };
  } else if (identical) {
    status = { tone: 'info', text: 'That is the exact recipe. Try a bigger or smaller batch!' };
  } else {
    status = { tone: 'bad', text: `Different taste: mango is ${strength}. ${me.a} : ${me.b} is not equivalent to ${ref.a} : ${ref.b}` };
  }

  const toneClass = {
    good: 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-glow-green animate-ratio-pop',
    bad: 'bg-[#161129] border-pink-500/70 text-pink-300',
    info: 'bg-[#161129] border-amber-400/80 text-amber-400 shadow-glow-gold',
  }[status.tone];

  const refLabel = mode === 'compare' ? "Robo's shake" : `Target shake ${targetIdx + 1}`;
  const meLabel = mode === 'compare' ? "Alex's shake" : 'Your shake';

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-1.5 select-none">
      {/* Target chooser (Station A) */}
      {mode === 'target' && (
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {TARGETS.map((t, idx) => {
            const isActive = idx === targetIdx;
            const done = matched.includes(idx);
            return (
              <button
                key={idx}
                onClick={() => pickTarget(idx)}
                className={`px-3 py-1 rounded-full text-xs md:text-sm font-black transition-all cursor-pointer flex items-center gap-1 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-glow-gold scale-105'
                    : done
                    ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/60'
                    : 'bg-[#1A1333] text-purple-200 hover:text-white border border-purple-700/60'
                }`}
              >
                {done && <CheckCircle2 className="w-3.5 h-3.5" />}
                <span>{t.a} : {t.b}</span>
              </button>
            );
          })}
          <span className="text-xs font-black text-cyan-300 pl-1">Matched {matched.length}/{TARGETS.length}</span>
        </div>
      )}

      <div className="w-full flex items-start justify-center gap-2 md:gap-5">
        {/* Reference shake */}
        <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
          <span className="text-xs md:text-sm font-black uppercase tracking-wider text-cyan-300">{refLabel}</span>
          <Glass a={ref.a} b={ref.b} height={glassH} />
          <RatioLine a={ref.a} b={ref.b} dim showSimplest={!compactOnly} />
        </div>

        {/* Equal / not equal sign */}
        <div
          className={`self-center w-11 h-11 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center text-2xl md:text-3xl font-black shrink-0 transition-colors ${
            same ? 'bg-emerald-500 border-emerald-300 text-slate-950 shadow-glow-green' : 'bg-[#161129] border-pink-500/70 text-pink-400'
          }`}
          title={same ? 'Equivalent ratios' : 'Different ratios'}
        >
          {same ? '=' : '≠'}
        </div>

        {/* Adjustable shake */}
        <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-black uppercase tracking-wider text-amber-300">{meLabel}</span>
            <button
              onClick={reset}
              className="p-1 rounded-lg bg-purple-950/60 hover:bg-purple-900 border border-[#3B2D6B] text-slate-300 cursor-pointer"
              title="Reset shake"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
          <Glass a={me.a} b={me.b} height={glassH} />
          <RatioLine a={me.a} b={me.b} showSimplest={!compactOnly} />
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <Stepper icon="🥭" label="mango scoops" value={me.a} onChange={(v) => update('a', v)} />
            <Stepper icon="🥛" label="milk scoops" value={me.b} onChange={(v) => update('b', v)} />
          </div>
        </div>
      </div>

      {/* Live status pill */}
      <div
        className={`border-2 px-4 py-1.5 rounded-full font-black text-xs md:text-sm text-center z-10 max-w-full ${toneClass}`}
        key={status.text}
      >
        {status.text}
      </div>
    </div>
  );
};

export default RatioMixerRig;
