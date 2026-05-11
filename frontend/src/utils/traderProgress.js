export const XP_PER_TOPIC = 50;
export const XP_PER_QUIZ = 200;
export const XP_PER_MODULE = 500;

export const getTraderData = () => {
  const saved = localStorage.getItem("trader_profile");

  if (saved) return JSON.parse(saved);

  return {
    xp: 0,
    level: 1,
    rank: "Beginner Trader",
    completedModules: [],
    completedTopics: [],
    quizzesPassed: [],
  };
};

export const calculateLevel = (xp) => {
  return Math.floor(xp / 500) + 1;
};

export const calculateRank = (level) => {
  if (level >= 20) return "Elite Trader";
  if (level >= 15) return "Professional Trader";
  if (level >= 10) return "Momentum Trader";
  if (level >= 5) return "Chart Explorer";

  return "Beginner Trader";
};

export const saveTraderData = (data) => {
  localStorage.setItem(
    "trader_profile",
    JSON.stringify(data)
  );
};

export const addXP = (amount) => {
  const trader = getTraderData();

  trader.xp += amount;

  trader.level = calculateLevel(
    trader.xp
  );

  trader.rank = calculateRank(
    trader.level
  );

  saveTraderData(trader);

  return trader;
};