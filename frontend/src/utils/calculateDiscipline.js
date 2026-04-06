export const calculateDisciplineScore = (trades = []) => {
  if (!trades || trades.length === 0) return 0;

  let score = 100;

  // 🔻 Penalize losses
  trades.forEach((t) => {
    if (t.pl < 0) score -= 10;
  });

  // 🔻 Penalize overtrading
  if (trades.length > 5) score -= 20;

  // 🔻 Penalize big losses
  const bigLoss = trades.some((t) => t.pl < -2000);
  if (bigLoss) score -= 20;

  return Math.max(score, 0);
};