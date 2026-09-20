import React from 'react';
import useAppStore from '../store/useAppStore';
import { Volume2, VolumeX, Check } from 'lucide-react';

const STAGES = [
  { id: 'wonder', label: 'Wonder', number: '01', icon: '🔍' },
  { id: 'story', label: 'Story', number: '02', icon: '📖' },
  { id: 'simulate', label: 'Simulate', number: '03', icon: '✏️' },
  { id: 'practice', label: 'Practice', number: '04', icon: '🎮' },
  { id: 'reflect', label: 'Reflect', number: '05', icon: '📜' },
];

export const TopNav = () => {
  const { currentStage, setStage, audioEnabled, toggleAudio } = useAppStore();

  const currentStageIndex = STAGES.findIndex((s) => s.id === currentStage);

  return (
    <header className="w-full pt-3 px-3 flex items-center justify-center z-50 shrink-0 select-none bg-transparent">
      {/* Centered Floating Nav Bar matching screenshot */}
      <div className="flex items-center gap-2 md:gap-3 bg-[#100826]/90 border border-purple-900/60 rounded-full px-3 py-1.5 shadow-2xl backdrop-blur-md">
        
        {/* 1. Home Button Pill */}
        <button
          onClick={() => setStage('home')}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#190F3B] hover:bg-purple-900/50 border border-purple-800/80 text-white font-black text-xs md:text-sm transition-colors cursor-pointer shadow-sm"
        >
          <span>🏠</span>
          <span>Home</span>
        </button>

        {/* 2. Connected Stage Navigation Pill Group matching screenshot */}
        <nav className="flex items-center gap-2 md:gap-2.5 bg-[#130A2A]/90 border border-purple-900/80 rounded-full px-3.5 py-1">
          {STAGES.map((st, index) => {
            const isActive = currentStage === st.id;
            const isCompleted = currentStageIndex > index;

            return (
              <React.Fragment key={st.id}>
                <button
                  onClick={() => setStage(st.id)}
                  className={`flex items-center gap-1.5 py-1 px-1 rounded-full font-black text-xs md:text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'text-amber-400'
                      : isCompleted
                      ? 'text-white hover:text-emerald-300'
                      : 'text-purple-300/80 hover:text-white'
                  }`}
                >
                  {/* Badge Icon: Green Checkmark if completed, Yellow Stage Number if active, Dark Badge if upcoming */}
                  {isCompleted ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                  ) : isActive ? (
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs shrink-0 shadow-[0_0_10px_rgba(255,184,0,0.7)]">
                      {st.number}
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300 font-black flex items-center justify-center text-[10px] shrink-0">
                      {st.number}
                    </div>
                  )}

                  {/* Stage Icon & Label */}
                  <span className="text-xs md:text-sm">{st.icon}</span>
                  <span className={isActive ? 'text-amber-400 font-black' : isCompleted ? 'text-white' : 'text-purple-300/90'}>
                    {st.label}
                  </span>
                </button>

                {/* Dashed separator line between stages */}
                {index < STAGES.length - 1 && (
                  <span className="text-purple-500/50 text-xs font-bold pointer-events-none select-none">
                    —
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* 3. Audio Toggle Button */}
        <button
          onClick={toggleAudio}
          className="w-8 h-8 rounded-full bg-[#190F3B] hover:bg-purple-900/50 border border-purple-800 text-purple-200 hover:text-white flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-sm"
          title={audioEnabled ? 'Mute Audio' : 'Enable Audio'}
        >
          {audioEnabled ? (
            <Volume2 className="w-4 h-4 stroke-[2.5]" />
          ) : (
            <VolumeX className="w-4 h-4 stroke-[2.5]" />
          )}
        </button>

      </div>
    </header>
  );
};

export default TopNav;
