import { useState, useEffect } from "react";

import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import academyModules from "../academy/modules";

import QuizBlock from "./QuizBlock";

import {
  ArrowLeft,
  ArrowRight,
  Save,
  Brain,
  Trophy,
  BarChart3,
} from "lucide-react";

import VisualBlock from "../components/academy/VisualBlock";
import MiniSimulation from "../components/academy/MiniSimulation";
import ChartPractice from "../components/academy/ChartPractice";
import ReplayMode from "../components/academy/ReplayMode";
import SkillMetrics from "../components/academy/SkillMetrics";

import {
  addXP,
  XP_PER_TOPIC,
  XP_PER_MODULE,
  getTraderData,
} from "../utils/traderProgress";

const TopicReader = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const moduleId = parseInt(
    searchParams.get("module")
  );

  const topicIndex = parseInt(
    searchParams.get("topic") || "0"
  );

  const module = academyModules.find(
    (m) => m.id === moduleId
  );

  const topics = module?.topics || [];

  const currentTopic = topics[topicIndex];

  const isLastTopic =
    topicIndex === topics.length - 1;

  const [showQuiz, setShowQuiz] =
    useState(false);

  const [progress, setProgress] =
    useState({});

  const [trader, setTrader] =
    useState(getTraderData());

  useEffect(() => {
    const saved = localStorage.getItem(
      `academy_progress_${moduleId}`
    );

    if (saved) {
      setProgress(JSON.parse(saved));
    }

    setTrader(getTraderData());
  }, [moduleId]);

  const markTopicComplete = () => {
    const newProgress = {
      ...progress,

      topics: {
        ...(progress.topics || {}),
        [currentTopic.id]: true,
      },
    };

    localStorage.setItem(
      `academy_progress_${moduleId}`,
      JSON.stringify(newProgress)
    );

    setProgress(newProgress);

    addXP(XP_PER_TOPIC);

    setTrader(getTraderData());

    if (isLastTopic) {
      addXP(XP_PER_MODULE);

      setShowQuiz(true);
    } else {
      navigate(
        `/learn?module=${moduleId}&topic=${
          topicIndex + 1
        }`
      );
    }
  };

  if (showQuiz) {
    return (
      <QuizBlock
        module={module}
        onComplete={() =>
          navigate("/academy")
        }
        onExit={() =>
          setShowQuiz(false)
        }
      />
    );
  }

  if (!currentTopic) {
    return (
      <div className="text-white p-10">
        Topic not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HEADER */}

      <div className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur-lg px-8 py-5">

        <div className="flex justify-between items-center">

          <div>
            <div className="text-2xl font-bold">
              {module.title}
            </div>

            <div className="text-sm text-gray-400 mt-1">
              Topic {topicIndex + 1} of{" "}
              {topics.length}
            </div>
          </div>

          <div className="flex items-center gap-4">

            <div className="bg-gray-800 px-5 py-3 rounded-2xl">
              <div className="text-xs text-gray-400">
                Trader Rank
              </div>

              <div className="font-semibold text-blue-400">
                {trader.rank}
              </div>
            </div>

            <div className="bg-gray-800 px-5 py-3 rounded-2xl">
              <div className="text-xs text-gray-400">
                XP
              </div>

              <div className="font-semibold">
                {trader.xp}
              </div>
            </div>

            <button
              onClick={() =>
                navigate("/academy")
              }
              className="px-5 py-3 bg-gray-800 rounded-2xl hover:bg-gray-700"
            >
              <Save className="w-4 h-4 inline mr-2" />
              Exit
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-3">

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 mb-10">

              <h1 className="text-5xl font-bold mb-10">
                {currentTopic.title}
              </h1>

              <div
                className="prose prose-invert max-w-none prose-lg"
                dangerouslySetInnerHTML={{
                  __html: currentTopic.content,
                }}
              />
            </div>

            {/* VISUAL LEARNING */}

            <VisualBlock
              moduleId={moduleId}
              topicId={currentTopic.id}
            />

            {/* MINI SIMULATION */}

            <MiniSimulation
              moduleId={moduleId}
            />

            {/* CHART PRACTICE */}

            <ChartPractice
              moduleId={moduleId}
              topicId={currentTopic.id}
            />

            {/* MARKET REPLAY */}

            <ReplayMode
              moduleId={moduleId}
            />

            {/* NAVIGATION */}

            <div className="flex justify-between mt-10">

              <button
                disabled={topicIndex === 0}
                onClick={() =>
                  navigate(
                    `/learn?module=${moduleId}&topic=${
                      topicIndex - 1
                    }`
                  )
                }
                className="px-8 py-4 bg-gray-800 rounded-2xl disabled:opacity-40"
              >
                <ArrowLeft className="w-5 h-5 inline mr-2" />
                Previous
              </button>

              <button
                onClick={markTopicComplete}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl"
              >
                {isLastTopic
                  ? "Take Final Quiz"
                  : "Complete & Continue"}

                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}

          <div>

            {/* SKILLS */}

            <SkillMetrics />

            {/* LEARNING STATUS */}

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 mt-8">

              <div className="flex items-center gap-3 mb-5">
                <Brain className="w-6 h-6 text-purple-400" />

                <h3 className="text-xl font-bold">
                  Learning Status
                </h3>
              </div>

              <div className="space-y-4">

                <div className="bg-gray-800 rounded-2xl p-4">
                  <div className="text-sm text-gray-400 mb-1">
                    Current Module
                  </div>

                  <div className="font-semibold">
                    {module.title}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-4">
                  <div className="text-sm text-gray-400 mb-1">
                    Current Topic
                  </div>

                  <div className="font-semibold">
                    {topicIndex + 1}/{topics.length}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-4">
                  <div className="text-sm text-gray-400 mb-1">
                    XP Reward
                  </div>

                  <div className="font-semibold text-green-400">
                    +{XP_PER_TOPIC} XP
                  </div>
                </div>
              </div>
            </div>

            {/* PERFORMANCE */}

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 mt-8">

              <div className="flex items-center gap-3 mb-5">
                <BarChart3 className="w-6 h-6 text-blue-400" />

                <h3 className="text-xl font-bold">
                  Progress Stats
                </h3>
              </div>

              <div className="space-y-5">

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">
                      Module Progress
                    </span>

                    <span>
                      {topicIndex + 1}/
                      {topics.length}
                    </span>
                  </div>

                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${
                          ((topicIndex + 1) /
                            topics.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">
                      Trader Level
                    </span>

                    <span>
                      Lv {trader.level}
                    </span>
                  </div>

                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${
                          (trader.xp % 500) / 5
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS */}

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 mt-8">

              <div className="flex items-center gap-3 mb-5">
                <Trophy className="w-6 h-6 text-yellow-400" />

                <h3 className="text-xl font-bold">
                  Achievements
                </h3>
              </div>

              <div className="space-y-4">

                <div className="bg-gray-800 rounded-2xl p-4">
                  🎯 Consistent Learner
                </div>

                <div className="bg-gray-800 rounded-2xl p-4">
                  📈 Market Explorer
                </div>

                <div className="bg-gray-800 rounded-2xl p-4">
                  🧠 Discipline Builder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicReader;