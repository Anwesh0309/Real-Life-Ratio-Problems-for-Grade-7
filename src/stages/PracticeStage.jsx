import React, { useEffect, useState } from 'react';
import useAppStore from '../store/useAppStore';
import RatioDiagramSVG from '../components/RatioDiagramSVG';
import { worldsData } from '../data/worlds';
import { narrationScript } from '../data/narration';
import soundEngine from '../utils/audio';
import { Trophy, Heart, Flame, Star, Lock, RotateCcw, Lightbulb, CheckCircle, XCircle, ArrowLeft, X, Sparkles } from 'lucide-react';

export const PracticeStage = () => {
  const {
    activeWorldId,
    startWorldSession,
    exitWorld,
    session,
    answerQuestion,
    advanceQuestion,
    useHint,
    progress,
    setStage,
  } = useAppStore();

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (!activeWorldId) {
      soundEngine.playText(narrationScript.practice_welcome);
    }
  }, [activeWorldId]);

  const currentQ = session.questions ? session.questions[session.currentIndex] : null;
  const activeWorld = worldsData.find(w => w.id === activeWorldId);

  // Trigger question prompt audio when activeWorldId or currentIndex changes
  useEffect(() => {
    if (activeWorldId && currentQ && !session.outOfHearts && !session.completed) {
      soundEngine.playText(currentQ.prompt, 'question');
    }
  }, [activeWorldId, session.currentIndex]);

  // Trigger Out of Hearts narration
  useEffect(() => {
    if (session.outOfHearts) {
      soundEngine.playText(narrationScript.out_of_hearts);
    }
  }, [session.outOfHearts]);

  // Trigger World Complete narration
  useEffect(() => {
    if (session.completed) {
      soundEngine.playText(narrationScript.world_complete);
    }
  }, [session.completed]);

  const handleStartWorld = (worldId) => {
    setSelectedOption(null);
    setFeedback(null);
    startWorldSession(worldId);
  };

  const handleExitWorld = () => {
    setSelectedOption(null);
    setFeedback(null);
    exitWorld();
  };

  const handleOptionClick = (optionVal) => {
    if (feedback || session.completed || session.outOfHearts) return;

    setSelectedOption(optionVal);
    const result = answerQuestion(optionVal) || {};

    if (result.isCorrect) {
      soundEngine.playText(narrationScript.correct_cheer);
      setFeedback({ isCorrect: true, explanation: currentQ.explanation });
    } else {
      soundEngine.playText(narrationScript.incorrect_try_again);
      setFeedback({ isCorrect: false, explanation: currentQ.explanation });
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setFeedback(null);
    advanceQuestion();
  };

  const handleUseHint = () => {
    useHint();
    if (activeWorldId && currentQ) {
      soundEngine.playText(currentQ.hint, 'thinking');
    }
  };

  // 1. World Selector List Screen (Exact 5x2 Card Grid matching Screenshot 1)
  if (!activeWorldId) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-3 md:p-5 cosmic-bg overflow-hidden select-none">
        
        {/* Top Header Title & Subtitle matching Screenshot 1 */}
        <div className="flex flex-col items-center text-center space-y-1 mb-4 md:mb-6 shrink-0 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-display flex items-center justify-center gap-3">
            <span>🎮</span>
            <span>Practice — Choose Your World!</span>
          </h1>
          <p className="text-sm md:text-base font-extrabold text-purple-200/90">
            Answer questions in each world. Earn stars and XP!
          </p>
        </div>

        {/* 2 Rows × 5 Columns Card Grid matching Screenshot 1 */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 my-auto px-2 z-10">
          {worldsData.map((world, idx) => {
            const isUnlocked = progress.unlockedWorlds.includes(world.id);
            const isFirstActive = isUnlocked && world.id === 1;

            // Custom icons for the 10 worlds to match Screenshot 1 visual layout
            const worldIcons = ["🍎", "⭐", "🧸", "🐶", "✏️", "🚀", "🧺", "🔢", "🌈", "🏰"];
            const cardIcon = worldIcons[idx] || world.icon || "🎯";

            const qStart = (world.id - 1) * 10 + 1;
            const qEnd = world.id * 10;
            const qRangeText = `Questions ${qStart}–${qEnd}`;

            return (
              <div
                key={world.id}
                className={`relative rounded-3xl p-4 flex flex-col items-center justify-between text-center transition-all ${
                  isUnlocked
                    ? 'bg-[#180F3B]/90 border-2 border-purple-400/80 shadow-[0_0_25px_rgba(139,92,246,0.35)] scale-[1.02]'
                    : 'bg-[#120A2B]/60 border border-purple-900/40 opacity-55'
                }`}
                style={{ minHeight: '165px' }}
              >
                {/* Lock icon on top right for locked cards */}
                {!isUnlocked && (
                  <div className="absolute top-3 right-3 text-purple-300/40">
                    <Lock className="w-4 h-4" />
                  </div>
                )}

                {/* Main Emoji Icon in upper half */}
                <div className={`text-4xl md:text-5xl my-auto transition-transform ${isUnlocked ? 'hover:scale-110' : 'grayscale opacity-60'}`}>
                  {cardIcon}
                </div>

                {/* World Title & Question Range */}
                <div className="flex flex-col items-center mt-2 space-y-0.5 w-full">
                  <h3 className={`text-xs md:text-sm font-black leading-tight ${isUnlocked ? 'text-white' : 'text-purple-300/70'}`}>
                    {world.title.replace(/^World \d+: /, '')}
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-purple-300/70">
                    {qRangeText}
                  </p>
                </div>

                {/* Bottom Action CTA */}
                {isUnlocked ? (
                  <button
                    onClick={() => handleStartWorld(world.id)}
                    className="mt-3 w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-400 hover:to-rose-400 text-white font-black text-xs md:text-sm py-1.5 px-3 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.6)] hover:scale-105 transition-transform flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>▶</span>
                    <span>PRACTICE</span>
                  </button>
                ) : (
                  <div className="mt-3 h-7 flex items-center justify-center text-[10px] font-black text-purple-400/40 uppercase tracking-wider">
                    LOCKED
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    );
  }

  // 2. Out of Hearts Screen
  if (session.outOfHearts) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center p-3 md:p-5 cosmic-bg overflow-hidden select-none">
        {/* Top Controls: Back & Close */}
        <div className="w-full max-w-4xl flex items-center justify-between shrink-0 pt-1 px-2 z-20">
          <button
            onClick={handleExitWorld}
            className="bg-[#130A2A]/80 border border-purple-800/80 hover:bg-purple-900/50 text-purple-200 text-xs md:text-sm font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 text-purple-300" />
            <span>Worlds</span>
          </button>

          <button
            onClick={handleExitWorld}
            className="w-7 h-7 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white flex items-center justify-center font-black cursor-pointer shadow-md"
            title="Close"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Center Out of Hearts Banner */}
        <div className="my-auto flex flex-col items-center text-center space-y-4 max-w-lg w-full z-10">
          <button
            onClick={() => soundEngine.playText(narrationScript.out_of_hearts)}
            className="text-6xl md:text-7xl animate-bounce cursor-pointer"
            title="Listen out of hearts narration"
          >
            🥺
          </button>

          <h2 className="text-3xl md:text-4xl font-black text-rose-500 font-display">
            Out of Hearts!
          </h2>

          <p className="text-sm md:text-base font-extrabold text-purple-200 leading-relaxed px-4">
            Robo says: "No worries! Let's practice some more. Try again to master this world!"
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleStartWorld(activeWorldId)}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-7 py-3 rounded-full shadow-[0_0_20px_rgba(255,184,0,0.6)] cursor-pointer text-sm md:text-base flex items-center gap-2 transition-transform hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry World</span>
            </button>
            <button
              onClick={handleExitWorld}
              className="bg-[#130E26] hover:bg-[#1A1333] border border-purple-700/80 text-purple-200 hover:text-white font-black px-7 py-3 rounded-full cursor-pointer text-sm md:text-base flex items-center gap-2 transition-colors"
            >
              <span>Quit World</span>
            </button>
          </div>
        </div>

        <div className="shrink-0 pb-1" />
      </div>
    );
  }

  // 3. World Complete Celebration Screen
  if (session.completed) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 cosmic-bg text-center space-y-6">
        <div className="bg-emerald-950/90 border-2 border-emerald-500 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-glow-green">
          <button
            onClick={() => soundEngine.playText(narrationScript.world_complete)}
            className="text-5xl animate-bounce cursor-pointer"
            title="Listen celebration audio"
          >
            🏆
          </button>
          <h2 className="text-2xl md:text-3xl font-black text-white">World Cleared!</h2>

          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <Star
                key={s}
                className={`w-9 h-9 ${
                  s <= session.starsEarned
                    ? 'fill-amber-400 text-amber-400 scale-110 shadow-glow-gold'
                    : 'text-slate-600'
                }`}
              />
            ))}
          </div>

          <div className="text-base font-black text-emerald-300">
            Earned +{session.xp} XP ⭐
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            {activeWorldId < 10 && (
              <button
                onClick={() => handleStartWorld(activeWorldId + 1)}
                className="btn-gold px-6 py-2.5 rounded-xl font-black text-sm md:text-base"
              >
                Next World 🚀
              </button>
            )}
            <button
              onClick={handleExitWorld}
              className="px-6 py-2.5 rounded-xl bg-purple-950 border border-purple-700 text-purple-200 font-bold text-sm md:text-base"
            >
              World Map 🗺️
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  // 4. Per-Question Quiz Play View (Exact Match to Screenshot 2)
  const currentWorldTitle = activeWorld ? activeWorld.title.replace(/^World \d+: /, '') : 'Ramp Rally';
  const progressPercent = Math.round(((session.currentIndex + 1) / 10) * 100);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-3 md:p-4 cosmic-bg overflow-hidden select-none">
      
      {/* 1. Top Controls Bar: Back to Worlds (Left) & Close (Right) matching Screenshot 2 */}
      <div className="w-full max-w-4xl flex items-center justify-between shrink-0 pt-1 px-2 z-20">
        <button
          onClick={handleExitWorld}
          className="bg-[#130A2A]/80 border border-purple-800/80 hover:bg-purple-900/50 text-purple-200 text-xs md:text-sm font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer backdrop-blur-md transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-purple-300" />
          <span>Worlds</span>
        </button>

        <button
          onClick={handleExitWorld}
          className="w-7 h-7 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white flex items-center justify-center font-black cursor-pointer shadow-md"
          title="Close"
        >
          <X className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

      {/* 2. World Title Pill Badge & HUD Bar matching Screenshot 2 */}
      <div className="flex flex-col items-center w-full max-w-2xl shrink-0 space-y-2 z-10 -mt-2">
        {/* Pink Glowing World Title Badge */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-black text-sm md:text-base px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.7)] flex items-center gap-2 border border-pink-400/50">
          <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
          <span>{currentWorldTitle}</span>
        </div>

        {/* Stats HUD Row (Star XP Pill, Hearts, Streak Pill) */}
        <div className="w-full flex items-center justify-between px-4 pt-1">
          {/* Left Star XP Pill */}
          <div className="bg-[#180F3B]/90 border border-purple-500/30 text-amber-300 font-black text-xs md:text-sm px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{session.xp}</span>
          </div>

          {/* Center 3 Hearts */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((h) => (
              <Heart
                key={h}
                className={`w-6 h-6 ${
                  h <= session.hearts ? 'fill-pink-500 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]' : 'text-slate-700/60'
                }`}
              />
            ))}
          </div>

          {/* Right Streak Pill */}
          <div className="bg-[#180F3B]/90 border border-purple-500/30 text-amber-400 font-black text-xs md:text-sm px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
            <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{session.streak}x</span>
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full px-2 pt-1">
          <div className="flex items-center justify-between text-xs font-black text-purple-200/90 mb-1">
            <span>Question {session.currentIndex + 1}/10</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-[#120A2B] border border-purple-900/60 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Main Question Card Modal matching Screenshot 2 */}
      <div className="relative w-full max-w-2xl bg-[#120A2B]/90 border border-purple-500/30 rounded-3xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center my-auto z-10">
        
        {/* Yellow Rule Badge on top edge of card */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md border border-amber-300 flex items-center gap-1">
          <span>✦</span>
          <span>{currentQ.topicTag || "RATIO RULE"}</span>
        </div>

        {/* Dark Visual / Diagram Frame Box */}
        <div className="w-full bg-[#0B051C] border border-cyan-500/30 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center shadow-inner mt-2 mb-4">
          
          {/* Enlarged Diagram / SVG Illustration */}
          <div className="w-full max-w-lg h-44 md:h-56 lg:h-64 flex items-center justify-center">
            {currentQ.diagram ? (
              <RatioDiagramSVG diagram={currentQ.diagram} />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-950/80 to-purple-950/80 rounded-xl flex flex-col items-center justify-center p-4 text-purple-300 border border-purple-800/40">
                <Sparkles className="w-10 h-10 text-amber-400 mb-1.5" />
                <span className="text-sm md:text-base font-black text-purple-200">Interactive Ratio Lab Visual</span>
              </div>
            )}
          </div>

          {/* Question Prompt Text (Enlarged) */}
          <h2 className="text-lg md:text-2xl lg:text-3xl font-black text-white max-w-xl leading-relaxed font-display text-center mt-4">
            {currentQ.prompt}
          </h2>
        </div>

        {/* 4 Multiple Choice Answer Options Grid (2x2) (Enlarged) */}
        <div className="grid grid-cols-2 gap-3.5 w-full">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            let btnStyle = "bg-[#180E38]/90 border-purple-500/30 text-white hover:bg-purple-900/60 hover:border-purple-400";

            if (feedback) {
              if (opt === currentQ.correctAnswer) {
                btnStyle = "bg-emerald-950 border-2 border-emerald-400 text-emerald-300 font-black shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-[1.02]";
              } else if (isSelected && !feedback.isCorrect) {
                btnStyle = "bg-rose-950 border-2 border-rose-500 text-rose-300 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                disabled={!!feedback}
                className={`py-4 md:py-5 px-5 rounded-2xl border ${btnStyle} font-black text-base md:text-xl lg:text-2xl transition-all flex items-center justify-center shadow-md cursor-pointer hover:scale-[1.01]`}
              >
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Explanation overlay if answered */}
        {feedback && (
          <div className={`mt-3 p-3 rounded-2xl border flex items-center gap-3 w-full ${
            feedback.isCorrect ? 'bg-emerald-950/90 border-emerald-500 text-emerald-300' : 'bg-red-950/90 border-red-500 text-red-200'
          }`}>
            {feedback.isCorrect ? <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> : <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
            <p className="text-xs md:text-sm font-bold flex-1 text-left">{feedback.explanation}</p>
            <button
              onClick={handleNextQuestion}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-4 py-1.5 rounded-xl text-xs font-black shrink-0 cursor-pointer"
            >
              Next →
            </button>
          </div>
        )}

        {/* Hint button */}
        <div className="w-full flex items-center justify-between pt-2">
          <button
            onClick={handleUseHint}
            className="text-xs md:text-sm font-black text-amber-400 flex items-center gap-1 hover:underline cursor-pointer"
          >
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>Use Hint</span>
          </button>
        </div>

        {session.hintUsed && (
          <p className="mt-1 text-xs font-bold text-amber-300 bg-amber-950/40 p-2 rounded-xl border border-amber-500/30 w-full text-left">
            💡 {currentQ.hint}
          </p>
        )}
      </div>

      {/* Bottom padding */}
      <div className="shrink-0 pb-1" />
    </div>
  );
};

export default PracticeStage;
