import React, { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import RatioMixerRig from '../components/RatioMixerRig';
import BarModelBuilder from '../components/BarModelBuilder';
import RecipeDetective from '../components/RecipeDetective';
import RealWorldRatioLab from '../components/RealWorldRatioLab';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { ArrowRight, ArrowLeft, X, Unlock, Sparkles } from 'lucide-react';

const STATIONS = [
  { id: 'A', num: 1, name: 'Robo\'s Shake Lab', icon: '🥭', focus: 'Compare & scale shake ratios (Story Slide 1 & 2)' },
  { id: 'B', num: 2, name: 'Bar Model Sharing', icon: '📊', focus: 'Find 1 unit value to share totals (Story Slide 3)' },
  { id: 'C', num: 3, name: 'Recipe Detective', icon: '🕵️', focus: 'Spot & fix mis-scaled ingredients (Story Slide 4)' },
  { id: 'D', num: 4, name: 'Real-World Scale Lab', icon: '🌍', focus: 'Scale boba, map distance, paint & rice' },
];

const STATION_TIPS = {
  A: 'Story Rule: Multiply both Mango & Milk scoops by the same number for identical taste!',
  B: 'Story Rule: Total Amount ÷ Total Units = 1 Unit Value. Multiply 1 unit by each part!',
  C: 'Detective Secret: Multiplicative scaling (×k) preserves ratio. Additive (+x) ruins taste!',
  D: 'Real-World Scaling: Multiply both parts by Scale Factor k to solve proportional missions!',
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

  const activeStationObj = STATIONS.find(s => s.id === simulateStation) || STATIONS[0];
  const stationIndex = STATIONS.findIndex((s) => s.id === simulateStation);

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col justify-between items-center p-3 md:p-6 cosmic-bg overflow-y-auto select-none">
      
      {/* Top Right Close Button matching screenshot */}
      <div className="w-full max-w-6xl lg:max-w-7xl flex items-center justify-end shrink-0 pt-1 px-2 z-20">
        <button
          onClick={() => setStage('home')}
          className="w-8 h-8 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white flex items-center justify-center font-black cursor-pointer shadow-md transition-colors"
          title="Close"
        >
          <X className="w-5 h-5 stroke-[3]" />
        </button>
      </div>

      {/* Main Centered 2-Column Modal Card matching screenshot */}
      <div className="relative z-10 bg-[#120A2B]/90 border border-purple-500/30 rounded-3xl p-5 md:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md max-w-6xl lg:max-w-7xl w-full flex flex-col my-auto shrink-0 space-y-3">
        
        {/* Top Glowing Cyan Handle Bar matching screenshot */}
        <div className="w-20 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] mx-auto mb-2 shrink-0" />

        {/* Header Title: 🧪 Simulation Stations */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white font-display flex items-center justify-center gap-2.5 mb-3 text-center">
          <span className="text-3xl md:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h1>

        {/* 2-Column Content Grid matching screenshot */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 w-full items-stretch">
          
          {/* Left Column: Station Selector Navigation Menu */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-between space-y-3 shrink-0">
            
            {/* Station Cards List */}
            <div className="flex flex-col space-y-2.5">
              {STATIONS.map((st) => {
                const isActive = simulateStation === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setSimulateStation(st.id)}
                    className={`w-full p-3.5 rounded-2xl transition-all flex items-center justify-between cursor-pointer text-left ${
                      isActive
                        ? 'bg-cyan-950/50 border-2 border-cyan-400 text-white shadow-[0_0_18px_rgba(6,182,212,0.4)] scale-[1.02]'
                        : 'bg-[#160B33]/80 border border-purple-800/60 hover:border-purple-600 text-purple-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Square Emoji Box */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
                        isActive
                          ? 'bg-cyan-500/20 border border-cyan-400/60 text-white'
                          : 'bg-purple-950/60 border border-purple-800/50 text-purple-300'
                      }`}>
                        {st.icon}
                      </div>

                      <div>
                        <h3 className={`text-sm md:text-base font-black ${isActive ? 'text-white' : 'text-purple-200'}`}>
                          Station {st.num}: {st.name}
                        </h3>
                        <p className="text-xs text-purple-300/80 font-bold truncate max-w-[160px]">
                          {st.focus}
                        </p>
                      </div>
                    </div>

                    {/* Unlock Status Icon */}
                    <div className="text-purple-400/60 shrink-0">
                      <Unlock className="w-4 h-4 text-amber-400/80" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Yellow CTA Button on Left Column */}
            <button
              onClick={() => setStage('practice')}
              className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-sm md:text-base py-3.5 px-4 rounded-full shadow-[0_0_20px_rgba(255,184,0,0.6)] hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer mt-auto"
            >
              <span>Go to Practice Phase!</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>

          </div>

          {/* Right Column: Interactive Lab Workspace Container */}
          <div className="w-full md:w-2/3 lg:w-3/4 bg-[#0B051C]/90 border border-purple-800/60 rounded-2xl p-5 md:p-6 flex flex-col justify-between min-h-[420px] md:min-h-[460px] shadow-inner">
            
            {/* Top Workspace Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-purple-900/50 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeStationObj.icon}</span>
                <h2 className="text-lg md:text-xl font-black text-white font-display">
                  Station {activeStationObj.id}: {activeStationObj.name}
                </h2>
              </div>
              <span className="text-xs md:text-sm font-black text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30">
                Station {activeStationObj.num} of 4
              </span>
            </div>

            {/* Active Lab Component Workspace */}
            <div className="flex-1 flex flex-col items-center justify-center w-full my-auto py-2">
              {simulateStation === 'A' && (
                <div className="w-full flex flex-col items-center justify-center space-y-2">
                  <p className="text-xs md:text-sm font-extrabold text-purple-200 text-center">
                    Match each target shake with a different amount: same ratio, same taste!
                  </p>
                  <RatioMixerRig mode="target" compact={true} largeCircle={true} />
                </div>
              )}

              {simulateStation === 'B' && (
                <div className="w-full flex flex-col items-center justify-center space-y-2">
                  <p className="text-xs md:text-sm font-extrabold text-purple-200 text-center">
                    Build the bars, then find the value of 1 unit to share the total!
                  </p>
                  <BarModelBuilder />
                </div>
              )}

              {simulateStation === 'C' && (
                <div className="w-full flex flex-col items-center justify-center space-y-2">
                  <p className="text-xs md:text-sm font-extrabold text-purple-200 text-center">
                    One ingredient was scaled the wrong way. Tap it, then fix the amount!
                  </p>
                  <RecipeDetective />
                </div>
              )}

              {simulateStation === 'D' && (
                <div className="w-full flex flex-col items-center justify-center space-y-2">
                  <p className="text-xs md:text-sm font-extrabold text-purple-200 text-center">
                    Scale bubble tea, maps, rice & teams to reach each mission goal!
                  </p>
                  <RealWorldRatioLab />
                </div>
              )}
            </div>

            {/* Bottom Tip Footer inside Workspace */}
            <div className="mt-2 pt-2 border-t border-purple-900/50 flex items-center gap-2 bg-[#130A2A]/80 p-2.5 rounded-xl text-xs md:text-sm font-bold text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{STATION_TIPS[simulateStation]}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SimulateStage;
