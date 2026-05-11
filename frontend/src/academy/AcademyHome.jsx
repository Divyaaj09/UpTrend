// src/academy/AcademyHome.jsx

import { Link } from "react-router-dom";
import academyModules from "./modules";

import {
  BookOpen,
  Award,
  Clock,
  Users,
  Trophy,
  TrendingUp,
  Lock,
  CheckCircle2,
} from "lucide-react";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { getTraderData } from "../utils/traderProgress";

const AcademyHome = () => {

  const { user } = useAuth();

  const [progressData, setProgressData] =
    useState({});

  const [trader, setTrader] =
    useState(getTraderData());

  // LOAD PROGRESS

  useEffect(() => {

    const loadProgress = () => {

      const allProgress = {};

      academyModules.forEach((module) => {

        const saved = localStorage.getItem(
          `academy_progress_${module.id}`
        );

        if (saved) {
          allProgress[module.id] =
            JSON.parse(saved);
        }
      });

      setProgressData(allProgress);

      setTrader(getTraderData());
    };

    loadProgress();

    window.addEventListener(
      "focus",
      loadProgress
    );

    return () => {
      window.removeEventListener(
        "focus",
        loadProgress
      );
    };

  }, []);

  // MODULE PROGRESS

  const getModuleProgress = (
    moduleId,
    totalTopics
  ) => {

    const data =
      progressData[moduleId] || {};

    const completed =
      Object.keys(
        data.topics || {}
      ).length;

    return {
      completedTopics: completed,
      totalTopics,
      quizCompleted:
        data.quizCompleted || false,
    };
  };

  // UNLOCK SYSTEM

  const isModuleUnlocked = (
    moduleId
  ) => {

    if (moduleId === 1)
      return true;

    const previousModule =
      progressData[moduleId - 1];

    return (
      previousModule &&
      previousModule.quizCompleted ===
        true
    );
  };

  // TOTALS

  const totalCompletedModules =
    academyModules.filter((module) => {

      const prog =
        progressData[module.id];

      return prog?.quizCompleted;

    }).length;

  const totalTopics =
    academyModules.reduce(
      (acc, module) =>
        acc + module.topics.length,
      0
    );

  const completedTopics =
    academyModules.reduce(
      (acc, module) => {

        const prog =
          progressData[module.id] ||
          {};

        return (
          acc +
          Object.keys(
            prog.topics || {}
          ).length
        );

      },
      0
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="mb-12">

          <div className="flex items-center gap-4 mb-5">

            <div className="bg-blue-500/10 p-4 rounded-3xl">
              <TrendingUp className="w-10 h-10 text-blue-400" />
            </div>

            <div>

              <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Trading Academy
              </h1>

              <p className="text-xl text-gray-400 mt-2">
                Master trading from beginner
                to professional level
              </p>

            </div>
          </div>
        </div>

        {/* TRADER PROFILE */}

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-12">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h2 className="text-4xl font-black">
                {trader.rank}
              </h2>

              <p className="text-gray-400 mt-2">
                Your Trading Progress Dashboard
              </p>

            </div>

            <div className="bg-blue-500/10 p-5 rounded-3xl">
              <Trophy className="w-12 h-12 text-yellow-400" />
            </div>
          </div>

          {/* XP */}

          <div className="mb-8">

            <div className="flex justify-between text-sm mb-3">

              <span className="text-gray-400">
                Level Progress
              </span>

              <span>
                {trader.xp} XP
              </span>
            </div>

            <div className="h-4 bg-gray-800 rounded-full overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                style={{
                  width: `${
                    (trader.xp % 500) / 5
                  }%`,
                }}
              />
            </div>
          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-800 rounded-3xl p-6 text-center">

              <div className="text-5xl font-black mb-3">
                {trader.level}
              </div>

              <div className="text-gray-400">
                Trader Level
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl p-6 text-center">

              <div className="text-5xl font-black mb-3">
                {
                  trader.completedModules
                    ?.length || 0
                }
              </div>

              <div className="text-gray-400">
                Modules Completed
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl p-6 text-center">

              <div className="text-5xl font-black mb-3">
                {trader.xp}
              </div>

              <div className="text-gray-400">
                Total XP
              </div>
            </div>
          </div>
        </div>

        {/* GLOBAL STATS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

            <BookOpen className="w-10 h-10 text-blue-500 mb-5" />

            <div className="text-4xl font-black mb-2">
              8
            </div>

            <div className="text-gray-400">
              Total Modules
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

            <Award className="w-10 h-10 text-yellow-500 mb-5" />

            <div className="text-4xl font-black mb-2">
              {totalCompletedModules}
            </div>

            <div className="text-gray-400">
              Modules Completed
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

            <Clock className="w-10 h-10 text-purple-500 mb-5" />

            <div className="text-4xl font-black mb-2">
              {completedTopics}
            </div>

            <div className="text-gray-400">
              Topics Completed
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

            <Users className="w-10 h-10 text-green-500 mb-5" />

            <div className="text-4xl font-black mb-2">
              {trader.xp}
            </div>

            <div className="text-gray-400">
              Total XP Earned
            </div>
          </div>
        </div>

        {/* MODULES */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {academyModules.map((module) => {

            const totalTopics =
              module.topics?.length || 0;

            const prog =
              getModuleProgress(
                module.id,
                totalTopics
              );

            const percent =
              prog.totalTopics > 0
                ? Math.round(
                    (prog.completedTopics /
                      prog.totalTopics) *
                      100
                  )
                : 0;

            const unlocked =
              isModuleUnlocked(
                module.id
              );

            return (

              <div
                key={module.id}
                className={`rounded-3xl overflow-hidden border transition-all hover:-translate-y-2 ${
                  unlocked
                    ? "bg-gray-900 border-gray-800 hover:border-blue-500"
                    : "bg-gray-900/50 border-gray-800 opacity-70"
                }`}
              >

                <div className="p-8">

                  {/* TOP */}

                  <div className="flex justify-between items-center mb-6">

                    <span className="px-4 py-2 text-xs rounded-full bg-blue-500/10 text-blue-400">
                      {module.level}
                    </span>

                    <span className="text-sm text-gray-400">
                      {module.estimatedTime}
                    </span>
                  </div>

                  {/* TITLE */}

                  <div className="flex justify-between items-start mb-5">

                    <h3 className="text-2xl font-bold">
                      {module.title}
                    </h3>

                    {!unlocked ? (
                      <Lock className="w-5 h-5 text-gray-500" />
                    ) : prog.quizCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : null}
                  </div>

                  {/* DESCRIPTION */}

                  <p className="text-gray-400 mb-8 line-clamp-4">
                    {module.description}
                  </p>

                  {/* PROGRESS */}

                  <div className="mb-6">

                    <div className="flex justify-between text-sm mb-3">

                      <span className="text-gray-400">
                        Progress
                      </span>

                      <span>
                        {prog.completedTopics}/
                        {prog.totalTopics}
                      </span>
                    </div>

                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-blue-500"
                        style={{
                          width: `${percent}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* BUTTON */}

                <div className="border-t border-gray-800 p-6">

                  {unlocked ? (

                    <Link
                      to={`/learn?module=${module.id}`}
                      className="block w-full py-4 text-center bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold"
                    >
                      {prog.quizCompleted
                        ? "Review Module"
                        : prog.completedTopics > 0
                        ? "Continue Learning"
                        : "Start Module"}
                    </Link>

                  ) : (

                    <button
                      disabled
                      className="w-full py-4 bg-gray-800 rounded-2xl text-gray-500 cursor-not-allowed"
                    >
                      Complete Previous Module
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademyHome;