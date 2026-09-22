import React, { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import RatioMixerRig from '../components/RatioMixerRig';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { Sparkles, ArrowRight } from 'lucide-react';

export const WonderStage = () => {
  const { setStage } = useAppStore();

  useEffect(() => {
    soundEngine.playText(narrationScript.wonder_prompt);
    return () => soundEngine.stop();
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center p-3 md:p-6 cosmic-bg overflow-y-auto select-none">
      
      {/* Centered Modal Card matching screenshot */}
      <div className="relative z-10 bg-[#120A2B]/90 border border-purple-500/30 rounded-3xl p-5 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md max-w-4xl lg:max-w-5xl w-full flex flex-col items-center text-center my-auto space-y-3 md:space-y-4">
        
        {/* Top Glowing Purple Handle Bar matching screenshot */}
        <div className="w-20 h-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] mb-1 shrink-0" />

        {/* 1. Header Title: 🔮 Wonder Hook */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white font-display flex items-center justify-center gap-2.5">
          <span className="text-3xl md:text-4xl">🔮</span>
          <span>Wonder Hook</span>
        </h1>

        {/* 2. Robot Mascot Face Icon */}
        <div className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#1A0F3C] border border-purple-500/40 flex items-center justify-center text-3xl md:text-4xl shadow-md shrink-0">
          🤖
        </div>

        {/* 3. Inner Dashed Highlight Frame Box matching screenshot */}
        <div className="w-full bg-[#160B33] border-2 border-dashed border-purple-500/40 rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center shadow-inner my-1">
          
          {/* Top Emoji Icon */}
          <div className="text-3xl md:text-4xl mb-0.5">
            🧱
          </div>

          {/* Big Golden Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-amber-400 font-display drop-shadow-[0_2px_12px_rgba(255,184,0,0.4)]">
            1 : 2 Ratio!
          </h2>

          {/* Sub-label under big title */}
          <p className="text-xs md:text-sm font-black tracking-widest text-purple-300 uppercase mt-0.5">
            ✓ REAL-WORLD RATIO HOOK!
          </p>

          {/* Compact Interactive Simulator inside Frame */}
          <div className="w-full pt-2">
            <RatioMixerRig mode="compare" compact={true} />
          </div>
        </div>

        {/* 4. On-Screen Story Question Paragraph */}
        <div className="space-y-2 px-2">
          <p className="text-sm md:text-base lg:text-lg font-extrabold text-white leading-relaxed">
            Robo makes a mango shake with <span className="text-amber-400 font-black">1 scoop</span> of mango and <span className="text-amber-400 font-black">2 scoops</span> of milk. Alex says: <span className="text-amber-300 font-black">"If you use 2 scoops of mango and 4 scoops of milk, the shake will taste stronger, because there is more mango!"</span> Is that actually true?
          </p>

          <p className="text-xs md:text-sm font-extrabold text-purple-200/90 italic">
            What if you added 2 more scoops of mango but no extra milk? Would the shake still taste the same?
          </p>

          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/60 bg-amber-950/40 text-amber-300 font-black text-xs md:text-sm shadow-md mt-1">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Same ratio, same taste! Multiply both parts equally to scale!</span>
          </div>
        </div>

        {/* 5. Golden CTA Button matching screenshot */}
        <button
          onClick={() => setStage('story')}
          className="w-full max-w-sm bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-base md:text-lg py-3 rounded-full shadow-[0_0_20px_rgba(255,184,0,0.7)] hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer mt-2 shrink-0"
        >
          <span>Discover the Story</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>

      </div>

    </div>
  );
};

export default WonderStage;
