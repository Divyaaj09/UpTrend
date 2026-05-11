// src/pages/Dashboard.jsx

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Trophy,
  Flame,
  Brain,
  TrendingUp,
  ShieldCheck,
  Target,
  CandlestickChart,
  BarChart3,
  BookOpen,
  ArrowUpRight,
  Award,
  Activity,
  Sparkles,
} from "lucide-react";

import academyModules from "../academy/modules";
import { getTraderData } from "../utils/traderProgress";

const Dashboard = () => {

  const [trader, setTrader] = useState(
    getTraderData()
  );

  const [progressData, setProgressData] =
    useState({});

  useEffect(() => {

    const loadData = () => {

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

    loadData();

    window.addEventListener("focus", loadData);

    return () => {
      window.removeEventListener(
        "focus",
        loadData
      );
    };

  }, []);

  // =========================
  // TOTALS
  // =========================

  const totalTopics = academyModules.reduce(
    (acc, module) =>
      acc + module.topics.length,
    0
  );

  const completedTopics = academyModules.reduce(
    (acc, module) => {

      const data =
        progressData[module.id] || {};

      return (
        acc +
        Object.keys(
          data.topics || {}
        ).length
      );

    },
    0
  );

  const completedModules =
    academyModules.filter(
      (module) =>
        progressData[module.id]
          ?.quizCompleted
    ).length;

  const overallProgress = Math.round(
    (completedTopics / totalTopics) * 100
  );

  // =========================
  // XP SYSTEM
  // =========================

  const currentLevelXP =
    trader.xp % 500;

  const nextLevelXP =
    500 - currentLevelXP;

  const levelProgress =
    (currentLevelXP / 500) * 100;

  // =========================
  // STREAK
  // =========================

  const learningStreak = Math.max(
    1,
    Math.floor(completedTopics / 3)
  );

  // =========================
  // QUIZ ACCURACY
  // =========================

  const quizAccuracy = useMemo(() => {

    if (completedModules === 0)
      return 0;

    return Math.min(
      98,
      70 + completedModules * 4
    );

  }, [completedModules]);

  // =========================
  // TRADER METRICS
  // =========================

  const metrics = [

    {
      title: "Chart Reading",
      value: Math.min(
        95,
        50 + completedModules * 5
      ),
      icon: BarChart3,
    },

    {
      title: "Psychology",
      value: Math.min(
        92,
        40 + completedModules * 6
      ),
      icon: Brain,
    },

    {
      title: "Risk Management",
      value: Math.min(
        96,
        45 + completedModules * 6
      ),
      icon: ShieldCheck,
    },

    {
      title: "Discipline",
      value: Math.min(
        90,
        50 + learningStreak * 3
      ),
      icon: Target,
    },
  ];

  // =========================
  // BADGES
  // =========================

  const badges = [

    completedModules >= 1 &&
      "Trading Beginner",

    completedModules >= 2 &&
      "Chart Explorer",

    completedModules >= 3 &&
      "Candlestick Reader",

    completedModules >= 5 &&
      "Risk Manager",

    completedModules >= 8 &&
      "Certified Trader",
  ].filter(Boolean);

  // =========================
  // AI INSIGHT
  // =========================

  const insight = useMemo(() => {

    if (completedModules <= 1) {
      return "You are building strong trading foundations. Focus on consistency.";
    }

    if (completedModules <= 3) {
      return "Your chart-reading ability is improving rapidly.";
    }

    if (completedModules <= 5) {
      return "You are developing strong trader discipline and analysis.";
    }

    return "You are approaching professional-level market understanding.";

  }, [completedModules]);

  // =========================
  // NEXT MODULE
  // =========================

  const nextModule =
    academyModules.find(
      (m) =>
        !progressData[m.id]
          ?.quizCompleted
    );

  return (

    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="bg-gradient-to-br from-[#07142c] to-[#0d1733] border border-gray-800 rounded-[32px] p-10 mb-10">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-4 mb-4">

                <div className="bg-blue-500/20 p-4 rounded-3xl">
                  <TrendingUp className="w-10 h-10 text-blue-400" />
                </div>

                <div>

                  <h1 className="text-5xl font-black">
                    Welcome Back
                  </h1>

                  <p className="text-gray-400 text-lg mt-2">
                    Your Professional Trading Workspace
                  </p>

                </div>
              </div>

              <div className="mt-8">

                <div className="flex items-center gap-3 mb-3">

                  <Trophy className="w-5 h-5 text-yellow-400" />

                  <span className="text-xl font-bold">
                    {trader.rank}
                  </span>
                </div>

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-gray-400">
                    Level {trader.level}
                  </span>

                  <span>
                    {trader.xp} XP
                  </span>
                </div>

                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{
                      width: `${levelProgress}%`,
                    }}
                  />
                </div>

                <div className="mt-2 text-sm text-gray-400">
                  {nextLevelXP} XP to next level
                </div>

              </div>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-6 min-w-[180px]">

                <Flame className="w-8 h-8 text-orange-400 mb-4" />

                <div className="text-4xl font-black">
                  {learningStreak}
                </div>

                <div className="text-gray-400 mt-1">
                  Day Streak
                </div>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-6">

                <BookOpen className="w-8 h-8 text-green-400 mb-4" />

                <div className="text-4xl font-black">
                  {completedModules}
                </div>

                <div className="text-gray-400 mt-1">
                  Modules Done
                </div>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-6">

                <Activity className="w-8 h-8 text-blue-400 mb-4" />

                <div className="text-4xl font-black">
                  {quizAccuracy}%
                </div>

                <div className="text-gray-400 mt-1">
                  Quiz Accuracy
                </div>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-6">

                <Sparkles className="w-8 h-8 text-purple-400 mb-4" />

                <div className="text-4xl font-black">
                  {overallProgress}%
                </div>

                <div className="text-gray-400 mt-1">
                  Academy Progress
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* ACADEMY */}

          <Link
            to="/academy"
            className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 hover:scale-[1.02] transition-all"
          >

            <BookOpen className="w-10 h-10 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Continue Learning
            </h3>

            <p className="text-blue-100 mb-6">
              Resume your academy journey
            </p>

            <div className="flex items-center gap-2 font-semibold">
              Open Academy
              <ArrowUpRight className="w-5 h-5" />
            </div>

          </Link>

          {/* MARKET REPLAY */}

          <Link
            to="/market-replay"
            className="bg-[#081327] border border-gray-800 rounded-3xl p-8 hover:scale-[1.02] transition-all block"
          >

            <CandlestickChart className="w-10 h-10 text-green-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Market Replay
            </h3>

            <p className="text-gray-400 mb-6">
              Practice with historical candles
            </p>

            <div className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 rounded-2xl font-semibold">
              Start Replay
            </div>

          </Link>

          {/* DAILY PRACTICE */}

          <Link
            to="/daily-practice"
            className="bg-[#081327] border border-gray-800 rounded-3xl p-8 hover:scale-[1.02] transition-all block"
          >

            <Brain className="w-10 h-10 text-purple-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Daily Practice
            </h3>

            <p className="text-gray-400 mb-6">
              Improve your trading skills
            </p>

            <div className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-2xl font-semibold">
              Practice Now
            </div>

          </Link>
        </div>

        {/* METRICS */}

        <div className="mb-10">

          <h2 className="text-4xl font-black mb-8">
            Trader Skill Metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {metrics.map((metric, index) => {

              const Icon = metric.icon;

              return (

                <div
                  key={index}
                  className="bg-[#081327] border border-gray-800 rounded-3xl p-8"
                >

                  <div className="flex justify-between items-center mb-5">

                    <div className="flex items-center gap-3">

                      <div className="bg-blue-500/10 p-3 rounded-2xl">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>

                      <h3 className="text-2xl font-bold">
                        {metric.title}
                      </h3>
                    </div>

                    <span className="text-3xl font-black text-blue-400">
                      {metric.value}%
                    </span>
                  </div>

                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                      style={{
                        width: `${metric.value}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BADGES */}

        <div className="mb-10">

          <h2 className="text-4xl font-black mb-8">
            Achievements
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

            {badges.map((badge, index) => (

              <div
                key={index}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-6 text-center"
              >

                <Award className="w-10 h-10 text-yellow-400 mx-auto mb-4" />

                <div className="font-bold">
                  {badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI INSIGHT */}

        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-5">

            <Brain className="w-8 h-8 text-purple-400" />

            <h2 className="text-3xl font-black">
              AI Trader Insight
            </h2>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            {insight}
          </p>

          {nextModule && (

            <div className="mt-8 bg-black/30 rounded-2xl p-5 inline-block">

              <div className="text-sm text-gray-400 mb-2">
                Recommended Next Module
              </div>

              <div className="text-2xl font-bold">
                {nextModule.title}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;