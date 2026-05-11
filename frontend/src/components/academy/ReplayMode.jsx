import { useState } from "react";

import replayData from "../../academy/replayData";

const ReplayMode = ({ moduleId }) => {
  const scenarios =
    replayData[moduleId] || [];

  const [step, setStep] = useState(0);

  const [selected, setSelected] =
    useState(null);

  const [showResult, setShowResult] =
    useState(false);

  const current = scenarios[step];

  if (!current) return null;

  const choose = (index) => {
    setSelected(index);

    setShowResult(true);

    // XP SYSTEM

    const correct =
      index === current.correct;

    const saved = JSON.parse(
      localStorage.getItem(
        "trader_skill_metrics"
      ) || "{}"
    );

    const updated = {
      discipline:
        (saved.discipline || 60) + 1,

      chartReading:
        (saved.chartReading || 60) +
        (correct ? 5 : 1),

      psychology:
        (saved.psychology || 60) +
        (correct ? 3 : 1),

      riskManagement:
        (saved.riskManagement || 60) +
        1,

      xp:
        (saved.xp || 0) +
        (correct ? 25 : 5),
    };

    localStorage.setItem(
      "trader_skill_metrics",
      JSON.stringify(updated)
    );
  };

  const nextScenario = () => {
    setSelected(null);

    setShowResult(false);

    if (step < scenarios.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  const correct =
    selected === current.correct;

  return (
    <div className="mt-16 bg-gray-900 border border-gray-800 rounded-[2rem] p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Market Replay Simulator
        </h2>

        <p className="text-gray-400">
          Practice market thinking by predicting
          real trading scenarios.
        </p>
      </div>

      {/* CARD */}

      <div className="bg-gray-800 rounded-3xl p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="text-sm text-blue-400 mb-1">
              Scenario
            </div>

            <h3 className="text-2xl font-bold">
              {current.title}
            </h3>
          </div>

          <div className="text-4xl font-bold">
            ₹{current.price}
          </div>
        </div>

        <div className="text-xl">
          {current.question}
        </div>
      </div>

      {/* OPTIONS */}

      {!showResult && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {current.options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() =>
                  choose(index)
                }
                className="bg-gray-800 hover:bg-blue-600 transition rounded-2xl py-5 px-5 text-lg"
              >
                {option}
              </button>
            )
          )}
        </div>
      )}

      {/* RESULT */}

      {showResult && (
        <div className="mt-8">
          <div
            className={`rounded-3xl p-6 border ${
              correct
                ? "bg-green-500/10 border-green-500"
                : "bg-red-500/10 border-red-500"
            }`}
          >
            <h3 className="text-2xl font-bold mb-3">
              {correct
                ? "Correct Prediction ✅"
                : "Incorrect Prediction ❌"}
            </h3>

            <p className="text-gray-300 text-lg">
              {current.explanation}
            </p>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="text-blue-400 font-semibold">
              +{correct ? 25 : 5} XP Earned
            </div>

            <button
              onClick={nextScenario}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReplayMode;