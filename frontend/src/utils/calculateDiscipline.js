export const calculateDisciplineScore = (trades, maxAllowedRisk) => {
  if (!Array.isArray(trades) || trades.length === 0) return 0;

  let score = 0;

  // 🟢 1️⃣ Risk Control (Max 25 Points)
  const safeTrades = trades.filter(
    (t) => (t.riskPercent || 0) <= maxAllowedRisk
  ).length;

  const riskControlScore =
    (safeTrades / trades.length) * 25;

  score += riskControlScore;

  // 🟢 2️⃣ Risk Consistency (Max 20 Points)
  const risks = trades.map((t) => t.riskPercent || 0);
  const avgRisk =
    risks.reduce((a, b) => a + b, 0) / risks.length;

  const variance =
    risks.reduce((sum, r) => sum + Math.pow(r - avgRisk, 2), 0) /
    risks.length;

  const consistencyScore =
    variance < 1
      ? 20
      : variance < 2
      ? 15
      : variance < 4
      ? 8
      : 0;

  score += consistencyScore;

  // 🟢 3️⃣ Reward : Risk Quality (Max 25 Points)
  const profitable = trades.filter((t) => t.pl > 0);
  const losing = trades.filter((t) => t.pl < 0);

  const avgWin =
    profitable.reduce((a, b) => a + b.pl, 0) /
    (profitable.length || 1);

  const avgLoss =
    Math.abs(
      losing.reduce((a, b) => a + b.pl, 0) /
        (losing.length || 1)
    ) || 1;

  const rrRatio = avgWin / avgLoss;

  let rrScore = 0;
  if (rrRatio >= 2) rrScore = 25;
  else if (rrRatio >= 1.5) rrScore = 18;
  else if (rrRatio >= 1) rrScore = 12;
  else rrScore = 5;

  score += rrScore;

  // 🟢 4️⃣ Trade Frequency Control (Max 15 Points)
  const frequencyScore =
    trades.length <= 5
      ? 15
      : trades.length <= 10
      ? 10
      : 5;

  score += frequencyScore;

  // 🟢 5️⃣ Exposure Control (Max 15 Points)
  const openExposure = trades
    .filter((t) => !t.exit)
    .reduce((acc, t) => acc + (t.riskPercent || 0), 0);

  const exposureScore =
    openExposure <= 5
      ? 15
      : openExposure <= 8
      ? 8
      : 0;

  score += exposureScore;

  return Math.min(100, Math.round(score));
};