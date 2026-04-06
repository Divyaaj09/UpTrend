export const getAchievements = (trades = [], disciplineScore = 0) => {
  const achievements = [];

  if (trades.length >= 1) {
    achievements.push("🎯 First Trade Completed");
  }

  const profitTrades = trades.filter((t) => t.pl > 0);

  if (profitTrades.length >= 1) {
    achievements.push("💰 First Profit Trade");
  }

  if (profitTrades.length >= 3) {
    achievements.push("🔥 3 Winning Trades");
  }

  if (disciplineScore >= 70 && trades.length >= 3) {
    achievements.push("🧠 Disciplined Trader");
  }

  if (trades.length >= 10) {
    achievements.push("🚀 Active Trader");
  }

  return achievements;
};