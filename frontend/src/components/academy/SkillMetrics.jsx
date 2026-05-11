import { useEffect, useState } from "react";

const SkillMetrics = () => {
  const [skills, setSkills] =
    useState(null);

  useEffect(() => {
    const load = () => {
      const saved = JSON.parse(
        localStorage.getItem(
          "trader_skill_metrics"
        ) || "{}"
      );

      setSkills({
        discipline:
          saved.discipline || 60,

        chartReading:
          saved.chartReading || 60,

        psychology:
          saved.psychology || 60,

        riskManagement:
          saved.riskManagement || 60,

        xp: saved.xp || 0,
      });
    };

    load();

    window.addEventListener(
      "storage",
      load
    );

    return () =>
      window.removeEventListener(
        "storage",
        load
      );
  }, []);

  if (!skills) return null;

  const average =
    (
      (skills.discipline +
        skills.chartReading +
        skills.psychology +
        skills.riskManagement) /
      4
    ).toFixed(0);

  let rank = "Beginner";

  if (average >= 70)
    rank = "Intermediate";

  if (average >= 85)
    rank = "Advanced";

  const cards = [
    {
      title: "Discipline",
      value: skills.discipline,
    },

    {
      title: "Chart Reading",
      value: skills.chartReading,
    },

    {
      title: "Psychology",
      value: skills.psychology,
    },

    {
      title: "Risk Management",
      value: skills.riskManagement,
    },
  ];

  return (
    <div className="mt-16">
      {/* HEADER */}

      <div className="bg-gray-900 border border-gray-800 rounded-[2rem] p-8 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-blue-400 mb-2">
              Trader Progression
            </div>

            <h2 className="text-4xl font-bold">
              {rank} Trader
            </h2>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-400">
              Total XP
            </div>

            <div className="text-4xl font-bold text-blue-400">
              {skills.xp}
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-gray-900 border border-gray-800 rounded-[2rem] p-8"
          >
            <div className="flex justify-between mb-5">
              <span className="text-2xl font-semibold">
                {card.title}
              </span>

              <span className="text-blue-400 text-2xl font-bold">
                {card.value}%
              </span>
            </div>

            <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                style={{
                  width: `${card.value}%`,
                }}
              />
            </div>

            <div className="mt-4 text-gray-400">
              {card.value < 70 &&
                "Developing Skill"}

              {card.value >= 70 &&
                card.value < 85 &&
                "Strong Progress"}

              {card.value >= 85 &&
                "Professional Level"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMetrics;