// src/pages/DailyPractice.jsx

import { useMemo, useState } from "react";

import {
  Brain,
  Trophy,
  Target,
  CheckCircle2,
  XCircle,
  Flame,
  Star,
} from "lucide-react";

const challenges = [

  {
    question:
      "What does a bullish engulfing candle indicate?",

    options: [
      "Trend reversal upward",
      "Market crash",
      "Low volatility",
      "Sideways movement",
    ],

    answer:
      "Trend reversal upward",
  },

  {
    question:
      "Which indicator measures momentum?",

    options: [
      "RSI",
      "Volume",
      "EMA",
      "VWAP",
    ],

    answer: "RSI",
  },

  {
    question:
      "Best place for stop loss in long trade?",

    options: [
      "Above resistance",
      "Below support",
      "At entry point",
      "Random level",
    ],

    answer:
      "Below support",
  },

  {
    question:
      "What confirms a breakout?",

    options: [
      "High volume",
      "Low volume",
      "Doji candle",
      "No movement",
    ],

    answer: "High volume",
  },
];

const DailyPractice = () => {

  const [current, setCurrent] =
    useState(0);

  const [selected, setSelected] =
    useState("");

  const [score, setScore] =
    useState(0);

  const [showAnswer, setShowAnswer] =
    useState(false);

  const [completed, setCompleted] =
    useState(false);

  const challenge =
    challenges[current];

  const progress = useMemo(() => {

    return (
      ((current + 1) /
        challenges.length) *
      100
    );

  }, [current]);

  const handleAnswer = (option) => {

    if (showAnswer) return;

    setSelected(option);

    setShowAnswer(true);

    if (
      option === challenge.answer
    ) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {

    if (
      current ===
      challenges.length - 1
    ) {

      setCompleted(true);

      return;
    }

    setCurrent((prev) => prev + 1);

    setSelected("");

    setShowAnswer(false);
  };

  const restartPractice = () => {

    setCurrent(0);

    setSelected("");

    setScore(0);

    setShowAnswer(false);

    setCompleted(false);
  };

  if (completed) {

    return (

      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">

        <div className="max-w-2xl w-full bg-[#081327] border border-gray-800 rounded-[32px] p-10 text-center">

          <div className="bg-yellow-500/10 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8">

            <Trophy className="w-14 h-14 text-yellow-400" />

          </div>

          <h1 className="text-5xl font-black mb-5">
            Practice Complete
          </h1>

          <p className="text-gray-400 text-xl mb-8">

            You scored
            {" "}
            <span className="text-green-400 font-bold">
              {score}
            </span>
            /
            {challenges.length}

          </p>

          <div className="grid grid-cols-3 gap-5 mb-10">

            <div className="bg-black/30 rounded-2xl p-5">

              <Flame className="w-8 h-8 text-orange-400 mx-auto mb-3" />

              <div className="text-3xl font-black">
                {score * 25}
              </div>

              <div className="text-gray-400 text-sm">
                XP Earned
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl p-5">

              <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />

              <div className="text-3xl font-black">
                {Math.round(
                  (score /
                    challenges.length) *
                    100
                )}
                %
              </div>

              <div className="text-gray-400 text-sm">
                Accuracy
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl p-5">

              <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />

              <div className="text-3xl font-black">
                {score >= 3
                  ? "A+"
                  : score >= 2
                  ? "B"
                  : "C"}
              </div>

              <div className="text-gray-400 text-sm">
                Rank
              </div>
            </div>
          </div>

          <button
            onClick={restartPractice}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-2xl text-lg font-bold transition-all"
          >

            Practice Again
          </button>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <div className="flex items-center gap-4 mb-4">

            <div className="bg-purple-500/10 p-4 rounded-3xl">

              <Brain className="w-10 h-10 text-purple-400" />

            </div>

            <div>

              <h1 className="text-5xl font-black">
                Daily Practice
              </h1>

              <p className="text-gray-400 text-lg mt-2">
                Sharpen your trading knowledge daily
              </p>

            </div>
          </div>

          {/* PROGRESS */}

          <div className="mt-8">

            <div className="flex justify-between mb-3">

              <span className="text-gray-400">
                Question
                {" "}
                {current + 1}
                /
                {challenges.length}
              </span>

              <span className="text-purple-400 font-bold">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="h-4 bg-gray-800 rounded-full overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* QUESTION CARD */}

        <div className="bg-[#081327] border border-gray-800 rounded-[32px] p-10">

          <div className="mb-10">

            <div className="text-purple-400 font-bold mb-3">
              Trading Challenge
            </div>

            <h2 className="text-4xl font-black leading-tight">

              {challenge.question}

            </h2>
          </div>

          {/* OPTIONS */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {challenge.options.map(
              (option, index) => {

                const correct =
                  option ===
                  challenge.answer;

                const selectedOption =
                  option === selected;

                return (

                  <button
                    key={index}
                    onClick={() =>
                      handleAnswer(option)
                    }
                    className={`p-6 rounded-2xl border text-left transition-all duration-300 font-semibold text-lg

                    ${
                      showAnswer &&
                      correct
                        ? "bg-green-500/20 border-green-500"
                        : showAnswer &&
                          selectedOption
                        ? "bg-red-500/20 border-red-500"
                        : "bg-black/20 border-gray-700 hover:border-purple-500 hover:bg-purple-500/10"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <span>{option}</span>

                      {showAnswer &&
                        correct && (
                          <CheckCircle2 className="w-6 h-6 text-green-400" />
                        )}

                      {showAnswer &&
                        selectedOption &&
                        !correct && (
                          <XCircle className="w-6 h-6 text-red-400" />
                        )}
                    </div>
                  </button>
                );
              }
            )}
          </div>

          {/* NEXT BUTTON */}

          {showAnswer && (

            <div className="mt-10 text-center">

              <button
                onClick={nextQuestion}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-2xl text-lg font-bold transition-all"
              >

                {current ===
                challenges.length - 1
                  ? "Finish Practice"
                  : "Next Question"}

              </button>
            </div>
          )}
        </div>

        {/* SCORE */}

        <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <div className="text-gray-400 mb-2">
                Current Score
              </div>

              <div className="text-4xl font-black">
                {score}
                /
                {challenges.length}
              </div>
            </div>

            <div className="bg-black/30 px-6 py-4 rounded-2xl">

              <div className="text-sm text-gray-400 mb-1">
                Accuracy
              </div>

              <div className="text-3xl font-black text-purple-400">

                {Math.round(
                  (score /
                    (current + 1)) *
                    100
                )}
                %

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPractice;