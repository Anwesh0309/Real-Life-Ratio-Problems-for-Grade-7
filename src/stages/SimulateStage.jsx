import React, { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import RatioMixerRig from '../components/RatioMixerRig';
import BarModelBuilder from '../components/BarModelBuilder';
import RecipeDetective from '../components/RecipeDetective';
import RealWorldRatioLab from '../components/RealWorldRatioLab';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const STATIONS = [
  { id: 'A', name: 'Ratio Mixer', badge: 'A' },
  { id: 'B', name: 'Bar Model Builder', badge: 'B' },
  { id: 'C', name: 'Recipe Detective', badge: 'C' },
  { id: 'D', name: 'Real-World Ratio Lab', badge: 'D' },
];

const STATION_TIPS = {
  A: 'Try a bigger batch: 4 : 6 has the very same shade as 2 : 3!',
  B: 'Total ÷ total units = 1 unit. Then multiply by each share!',
  C: 'Same multiplier for every ingredient. Adding is not multiplying!',
  D: 'Both parts grow by the same multiplier, so the ratio never changes!',
};

export const SimulateStage = () => {
  const { simulateStation, setSimulateStation, setStage } = useAppStore();

  const stationNarrationMap = {
    A: narrationScript.station_a_intro,
    B: narrationScript.station_b_intro,
    C: narrationScript.station_c_intro,
    D: narrationScript.station_d_intro,
  };

  useEffect(() => {
    soundEngine.playText(stationNarrationMap[simulateStation]);
  }, [simulateStation]);

  const handleMascotSpeak = () => {
    soundEngine.playText(stationNarrationMap[simulateStation]);
  };

  const stationIndex = STATIONS.findIndex((s) => s.id === simulateStation);

  const handleNextStation = () => {
    if (stationIndex < STATIONS.length - 1) {
      setSimulateStation(STATIONS[stationIndex + 1].id);
    } else {
      setStage('practice');
    }
  };

  const handlePrevStation = () => {
    if (stationIndex > 0) {
      setSimulateStation(STATIONS[stationIndex - 1].id);
    } else {
      setStage('story');
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-2.5 md:p-4 cosmic-bg overflow-hidden select-none">
      {/* Decorative Rotated Watermark Numbers in Background */}
      <div className="absolute top-8 left-8 text-7xl font-black text-purple-900/10 rotate-[-12deg] pointer-events-none font-display">
        1 : 2
      </div>
      <div className="absolute top-6 right-12 text-7xl font-black text-purple-900/10 rotate-[15deg] pointer-events-none font-display">
        3 : 5
      </div>
      <div className="absolute bottom-10 right-10 text-7xl font-black text-purple-900/10 rotate-[-15deg] pointer-events-none font-display">
        × 4
      </div>

      {/* 1. Main Header Title & Subtitle */}
      <div className="flex flex-col items-center text-center space-y-0.5 pt-0.5 shrink-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-amber-400 font-display flex items-center gap-2">
          <span>✏️</span>
          <span>Simulate</span>
        </h1>
        <p className="text-sm md:text-base font-extrabold text-purple-200">
          Explore and discover — no wrong answers!
        </p>
      </div>

      {/* 2. Transparent 4 Lab Station Switcher Tab Bar */}
      <div className="flex items-center justify-center gap-3 md:gap-4 bg-transparent p-1.5 md:p-2 max-w-4xl w-full shrink-0 my-1">
        {STATIONS.map((st) => {
          const isActive = simulateStation === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setSimulateStation(st.id)}
              className={`flex-1 py-2 px-3 md:px-4 rounded-xl font-black text-xs md:text-sm lg:text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-[0_0_20px_rgba(255,184,0,0.6)] scale-105'
                  : 'bg-purple-950/20 text-purple-200 hover:text-white hover:bg-purple-900/30'
              }`}
            >
              <span className={`w-5 h-5 md:w-6 md:h-6 rounded-full text-xs md:text-sm font-black flex items-center justify-center ${isActive ? 'bg-slate-950 text-amber-400' : 'bg-purple-900 text-amber-300'}`}>
                {st.badge}
              </span>
              <span className="truncate">{st.name}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Main Active Station Content Workspace */}
      <div className="w-full max-w-3xl flex-1 flex flex-col items-center justify-center my-auto overflow-hidden px-2">

        {/* Station A: Ratio Mixer (explore) */}
        {simulateStation === 'A' && (
          <div className="w-full flex flex-col items-center justify-center space-y-1.5 my-auto">
            <div className="text-center space-y-0.5">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-amber-400 flex items-center justify-center gap-2">
                <span>🥭</span>
                <span>Ratio Mixer</span>
              </h3>
              <p className="text-sm md:text-base font-extrabold text-slate-200 max-w-xl">
                Match each target shake with a different amount: same ratio, same taste!
              </p>
            </div>

            <div className="w-full flex items-center justify-center my-1">
              <RatioMixerRig mode="target" compact={true} largeCircle={true} />
            </div>
          </div>
        )}

        {/* Station B: Bar Model Builder (try it yourself) */}
        {simulateStation === 'B' && (
          <div className="w-full flex flex-col items-center justify-center space-y-1.5 my-auto">
            <div className="text-center space-y-0.5">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-amber-400 flex items-center justify-center gap-2">
                <span>📊</span>
                <span>Bar Model Builder</span>
              </h3>
              <p className="text-sm md:text-base font-extrabold text-slate-200 max-w-xl">
                Build the bars, then find the value of 1 unit to share the total!
              </p>
            </div>

            <div className="w-full flex items-center justify-center my-1">
              <BarModelBuilder />
            </div>
          </div>
        )}

        {/* Station C: Recipe Detective */}
        {simulateStation === 'C' && (
          <div className="w-full flex flex-col items-center justify-center space-y-1.5 my-auto">
            <div className="text-center space-y-0.5">
              <h3 className="text-2xl md:text-3xl font-black text-amber-400 flex items-center justify-center gap-2 font-display">
                <span>🕵️</span>
                <span>Recipe Detective</span>
              </h3>
              <p className="text-xs md:text-sm font-extrabold text-slate-200 max-w-xl">
                One ingredient was scaled the wrong way. Tap it, then fix the amount!
              </p>
            </div>

            <div className="w-full flex items-center justify-center my-1">
              <RecipeDetective />
            </div>
          </div>
        )}

        {/* Station D: Real-World Ratio Lab */}
        {simulateStation === 'D' && (
          <div className="w-full flex flex-col items-center justify-center space-y-2 my-auto">
            <div className="text-center space-y-0.5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-amber-400 flex items-center justify-center gap-2 font-display">
                <span>🌍</span>
                <span>Real-World Ratio Lab</span>
              </h3>
              <p className="text-base md:text-lg font-extrabold text-slate-200 max-w-xl">
                Scale bubble tea, maps, rice & teams to reach each mission goal!
              </p>
            </div>

            <RealWorldRatioLab />
          </div>
        )}

      </div>

      {/* 4. Mascot Speech Bubble Footer */}
      <div className="flex items-center gap-3 max-w-xl w-full justify-center shrink-0 my-0.5">
        <button
          onClick={handleMascotSpeak}
          className="w-9 h-9 rounded-full bg-[#130E26] border-2 border-amber-400 flex items-center justify-center text-lg shadow-[0_0_12px_rgba(255,184,0,0.5)] shrink-0 hover:scale-105 transition-transform"
          title="Listen narration"
        >
          🤖
        </button>
        <div className="bg-white text-slate-900 rounded-full px-4 py-1.5 shadow-xl border border-slate-100 font-extrabold text-xs md:text-sm text-center flex-1">
          {STATION_TIPS[simulateStation]}
        </div>
      </div>

      {/* 5. Bottom Station Navigation Buttons */}
      <div className="w-full max-w-xl flex items-center justify-between gap-4 pb-0.5 shrink-0">
        <button
          onClick={handlePrevStation}
          className="bg-[#130E26] hover:bg-[#1A1333] border border-purple-800/80 text-purple-200 hover:text-white px-7 py-2 rounded-full font-black text-xs md:text-sm cursor-pointer flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Station</span>
        </button>

        <button
          onClick={handleNextStation}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-7 py-2 rounded-full font-black text-xs md:text-sm cursor-pointer flex items-center gap-2 shadow-glow-gold transition-transform hover:scale-105"
        >
          <span>Next Station</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default SimulateStage;
