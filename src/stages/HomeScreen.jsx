import React, { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { Sparkles, Search, BookOpen, Sliders, Gamepad2, Trophy, ArrowRight } from 'lucide-react';

export const HomeScreen = () => {
  const { setStage } = useAppStore();

  useEffect(() => {
    soundEngine.playText(narrationScript.home_intro);
  }, []);

  const handleMascotSpeak = () => {
    soundEngine.playText(narrationScript.home_intro);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-3 md:p-5 cosmic-bg overflow-hidden select-none">
      {/* Decorative Rotating Faint Numerals & Math Watermarks matching screenshot */}
      <div className="absolute top-10 left-[7%] flex flex-col items-center text-4xl md:text-6xl font-black text-purple-300/10 rotate-[-12deg] pointer-events-none font-display leading-none">
        <span>54</span>
        <span className="text-6xl md:text-8xl">100</span>
      </div>
      <div className="absolute top-8 left-[20%] text-5xl md:text-7xl font-black text-purple-300/10 rotate-[-6deg] pointer-events-none font-display">
        91 <span className="text-3xl md:text-5xl opacity-80">11</span> 66
      </div>
      <div className="absolute top-6 left-[34%] text-4xl md:text-6xl font-black text-purple-300/10 pointer-events-none font-display">
        90
      </div>
      <div className="absolute top-4 left-[50%] -translate-x-1/2 text-4xl md:text-6xl font-black text-purple-300/10 pointer-events-none font-display">
        64
      </div>
      <div className="absolute top-6 right-[30%] text-4xl md:text-5xl font-black text-purple-300/10 pointer-events-none font-display">
        30 <span className="text-3xl md:text-4xl opacity-80">69</span>
      </div>
      <div className="absolute top-8 right-[16%] text-6xl md:text-8xl font-black text-purple-300/10 rotate-[8deg] pointer-events-none font-display">
        500
      </div>
      <div className="absolute top-12 right-[6%] text-5xl md:text-7xl font-black text-purple-300/10 pointer-events-none font-display">
        90
      </div>
      <div className="absolute top-28 right-[8%] text-5xl md:text-7xl font-black text-purple-300/10 rotate-[12deg] pointer-events-none font-display">
        347
      </div>
      <div className="absolute top-1/3 left-[4%] text-6xl md:text-8xl font-black text-purple-300/10 rotate-[-15deg] pointer-events-none font-display">
        H
      </div>
      <div className="absolute top-1/3 left-[28%] text-4xl md:text-5xl font-black text-purple-300/10 rotate-[-10deg] pointer-events-none font-display">
        T
      </div>
      <div className="absolute bottom-28 left-[10%] text-6xl md:text-8xl font-black text-purple-300/10 rotate-[14deg] pointer-events-none font-display">
        200
      </div>
      <div className="absolute top-1/2 right-[5%] text-5xl md:text-7xl font-black text-purple-300/10 rotate-[-8deg] pointer-events-none font-display">
        123
      </div>
      <div className="absolute bottom-16 right-[8%] text-7xl md:text-9xl font-black text-purple-300/10 rotate-[-6deg] pointer-events-none font-display">
        999
      </div>

      {/* Ratio Specific Watermarks */}
      <div className="absolute top-20 left-[14%] text-6xl md:text-8xl font-black text-purple-400/10 rotate-[-14deg] pointer-events-none font-display">
        1 : 2
      </div>
      <div className="absolute top-24 right-[22%] text-6xl md:text-8xl font-black text-purple-400/10 rotate-[10deg] pointer-events-none font-display">
        3 : 5
      </div>
      <div className="absolute bottom-24 left-[24%] text-6xl md:text-8xl font-black text-purple-400/10 rotate-[-8deg] pointer-events-none font-display">
        × 4
      </div>

      {/* Main Centered Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full my-auto space-y-3.5 md:space-y-4">

        {/* 1. MOE Curriculum Badge */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#130E26]/90 border border-amber-400/60 text-amber-300 font-black text-sm md:text-base lg:text-lg shadow-lg">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>MOE Curriculum • Grade 7</span>
        </div>

        {/* 2. Large Two-Tone Title */}
        <div className="flex flex-col items-center leading-none">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-display">
            Real-Life Ratio
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-amber-400 font-display mt-2 drop-shadow-[0_4px_25px_rgba(255,184,0,0.5)]">
            Problems!
          </h1>
        </div>

        {/* 3. Mascot Speech Bubble */}
        <div className="flex items-center gap-4 max-w-2xl w-full justify-center">
          {/* Avatar Icon */}
          <button
            onClick={handleMascotSpeak}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#130E26] border-2 border-amber-400 flex items-center justify-center text-3xl md:text-4xl shadow-[0_0_20px_rgba(255,184,0,0.5)] shrink-0 hover:scale-105 transition-transform cursor-pointer"
            title="Listen narration"
          >
            🤖
          </button>

          {/* White Speech Bubble */}
          <div className="relative flex-1 bg-white text-slate-900 rounded-3xl px-7 py-4 shadow-2xl border border-slate-100 flex flex-col items-center justify-center">
            {/* Left pointer triangle */}
            <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-10 border-r-white border-b-8 border-b-transparent" />

            <p className="text-base md:text-xl lg:text-2xl font-black text-slate-900 text-center leading-snug">
              Ready to mix, share and scale like a pro? Let's roll!
            </p>

            {/* Tiny Icon at bottom center of bubble */}
            <div className="text-sm text-slate-400 mt-1">⚖️</div>
          </div>
        </div>

        {/* 4. Sub-Description Paragraph */}
        <p className="text-lg md:text-2xl lg:text-3xl font-black text-white max-w-3xl leading-relaxed px-2">
          Discover how ratios compare amounts — plus how to simplify them, scale them up and share any total using bar models!
        </p>

        {/* 5. "YOUR LEARNING JOURNEY" Card */}
        <div className="w-full bg-[#120A2A]/85 border border-[#301A60]/80 rounded-3xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-4 backdrop-blur-md">
          <h2 className="text-sm md:text-base font-black uppercase tracking-widest text-amber-400 text-center">
            YOUR LEARNING JOURNEY
          </h2>

          {/* Top Row: 3 Steps (Wonder, Story, Simulate) */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Step 1: Wonder */}
            <button
              onClick={() => setStage('wonder')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-cyan-400 bg-cyan-950/40 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Search className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-base md:text-xl lg:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">Wonder</h3>
                <p className="text-sm md:text-base text-purple-300 font-bold">Spark curiosity</p>
              </div>
            </button>

            <ArrowRight className="w-5 h-5 text-purple-500 shrink-0" />

            {/* Step 2: Story */}
            <button
              onClick={() => setStage('story')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-amber-400 bg-amber-950/40 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,184,0,0.4)]">
                <BookOpen className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-base md:text-xl lg:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">Story</h3>
                <p className="text-sm md:text-base text-purple-300 font-bold">Hear the tale</p>
              </div>
            </button>

            <ArrowRight className="w-5 h-5 text-purple-500 shrink-0" />

            {/* Step 3: Simulate */}
            <button
              onClick={() => setStage('simulate')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-emerald-400 bg-emerald-950/40 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <Sliders className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-base md:text-xl lg:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">Simulate</h3>
                <p className="text-sm md:text-base text-purple-300 font-bold">Explore & discover</p>
              </div>
            </button>
          </div>

          {/* Bottom Row: 2 Steps Centered (Practice, Reflect) */}
          <div className="flex items-center justify-center gap-6 md:gap-10 pt-1">
            {/* Step 4: Practice */}
            <button
              onClick={() => setStage('practice')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-purple-400 bg-purple-950/40 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <Gamepad2 className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-base md:text-xl lg:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">Practice</h3>
                <p className="text-sm md:text-base text-purple-300 font-bold">Test your skills</p>
              </div>
            </button>

            <ArrowRight className="w-5 h-5 text-purple-500 shrink-0" />

            {/* Step 5: Reflect */}
            <button
              onClick={() => setStage('reflect')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-pink-400 bg-pink-950/40 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-base md:text-xl lg:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">Reflect</h3>
                <p className="text-sm md:text-base text-purple-300 font-bold">What did you learn?</p>
              </div>
            </button>
          </div>
        </div>

        {/* 6. Glowing Primary CTA Button */}
        <button
          onClick={() => setStage('wonder')}
          className="w-full max-w-md bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-2xl md:text-3xl py-4 md:py-5 px-8 rounded-full shadow-[0_0_30px_rgba(255,184,0,0.8)] hover:scale-105 transition-transform flex items-center justify-center gap-3 cursor-pointer"
        >
          <span>🚀 Begin Your Journey!</span>
        </button>

        {/* 7. Bottom 3 Stat Cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-5 w-full">
          {/* Card 1 */}
          <div className="bg-[#120A2A]/85 border border-[#301A60]/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <span className="text-4xl md:text-5xl">⚖️</span>
            <h4 className="text-base md:text-xl lg:text-2xl font-black text-white">3 Big Ideas</h4>
            <p className="text-sm md:text-base text-purple-300 font-bold">Compare, scale & share</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#120A2A]/85 border border-[#301A60]/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <span className="text-4xl md:text-5xl">🧩</span>
            <h4 className="text-base md:text-xl lg:text-2xl font-black text-white">4 Simulations</h4>
            <p className="text-sm md:text-base text-purple-300 font-bold">Interactive labs</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#120A2A]/85 border border-[#301A60]/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-1 backdrop-blur-md">
            <span className="text-4xl md:text-5xl">🏆</span>
            <h4 className="text-base md:text-xl lg:text-2xl font-black text-white">10 Game Worlds</h4>
            <p className="text-sm md:text-base text-purple-300 font-bold">Quizzes & rewards</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;
