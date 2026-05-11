// src/academy/QuizBlock.jsx

import { useState } from "react";

import {
  Trophy,
  XCircle,
  CheckCircle2,
} from "lucide-react";

import {
  addXP,
  getTraderData,
  saveTraderData,
  XP_PER_QUIZ,
  XP_PER_MODULE,
} from "../utils/traderProgress";

const QuizBlock = ({
  module,
  onComplete,
  onExit,
}) => {

  const questions = module.quiz.questions;

  const passingScore =
    module.quiz.passingScore;

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selected, setSelected] =
    useState({});

  const [result, setResult] =
    useState(null);

  const answer = (qid, idx) => {
    setSelected((prev) => ({
      ...prev,
      [qid]: idx,
    }));
  };

  const submit = () => {

    let correct = 0;

    questions.forEach((q) => {
      if (
        selected[q.id] === q.correctAnswer
      ) {
        correct++;
      }
    });

    const score = Math.round(
      (correct / questions.length) * 100
    );

    const passed =
      score >= passingScore;

    // SAVE QUIZ COMPLETION

    if (passed) {

      const saved = JSON.parse(
        localStorage.getItem(
          `academy_progress_${module.id}`
        ) || "{}"
      );

      const updatedProgress = {
        ...saved,
        quizCompleted: true,
      };

      localStorage.setItem(
        `academy_progress_${module.id}`,
        JSON.stringify(updatedProgress)
      );

      // XP SYSTEM

      addXP(
        XP_PER_QUIZ +
          XP_PER_MODULE
      );

      // UPDATE TRADER PROFILE

      const trader =
        getTraderData();

      if (
        !trader.completedModules.includes(
          module.id
        )
      ) {
        trader.completedModules.push(
          module.id
        );

        saveTraderData(trader);
      }
    }

    setResult({
      score,
      passed,
    });
  };

  // RESULT SCREEN

  if (result) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-8">

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 text-center max-w-xl w-full">

          {result.passed ? (
            <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-400" />
          ) : (
            <XCircle className="w-24 h-24 mx-auto mb-6 text-red-400" />
          )}

          <h2 className="text-5xl font-black mb-4">
            {result.score}%
          </h2>

          <p className="text-xl text-gray-400 mb-8">

            {result.passed
              ? "Congratulations! Module Completed Successfully."
              : "You did not reach the passing score. Try again."}
          </p>

          {result.passed && (
            <div className="bg-green-500/10 border border-green-500 rounded-2xl p-5 mb-8">

              <div className="flex items-center justify-center gap-3 text-green-400 font-semibold">

                <CheckCircle2 className="w-6 h-6" />

                +700 XP Earned
              </div>
            </div>
          )}

          <button
            onClick={
              result.passed
                ? onComplete
                : onExit
            }
            className={`px-10 py-4 rounded-2xl font-bold text-lg ${
              result.passed
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-red-600 hover:bg-red-500"
            }`}
          >
            {result.passed
              ? "Continue"
              : "Retry Quiz"}
          </button>
        </div>
      </div>
    );
  }

  const q =
    questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-4xl font-black mb-3">
            {module.title}
          </h1>

          <p className="text-gray-400">
            Question{" "}
            {currentQuestion + 1} of{" "}
            {questions.length}
          </p>
        </div>

        {/* QUESTION */}

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-10">
            {q.question}
          </h2>

          <div className="space-y-5">

            {q.options.map((op, i) => (

              <button
                key={i}
                onClick={() =>
                  answer(q.id, i)
                }
                className={`block w-full text-left p-6 border rounded-2xl transition-all ${
                  selected[q.id] === i
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-700 hover:border-gray-500"
                }`}
              >
                {op}
              </button>
            ))}
          </div>

          {/* BUTTONS */}

          <div className="flex justify-end mt-10">

            {currentQuestion <
            questions.length - 1 ? (

              <button
                onClick={() =>
                  setCurrentQuestion(
                    (c) => c + 1
                  )
                }
                disabled={
                  selected[q.id] ===
                  undefined
                }
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 rounded-2xl font-semibold"
              >
                Next
              </button>

            ) : (

              <button
                onClick={submit}
                disabled={
                  Object.keys(selected)
                    .length <
                  questions.length
                }
                className="px-8 py-4 bg-green-600 hover:bg-green-500 disabled:opacity-40 rounded-2xl font-semibold"
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizBlock;