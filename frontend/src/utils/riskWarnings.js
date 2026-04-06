export const getRiskWarnings = ({
  trades,
  openPosition,
  balance,
  disciplineScore,
}) => {
  const warnings = [];

  // 🟡 1. Over Risk
  if (openPosition) {
    const tradeValue =
      openPosition.entryPrice * openPosition.quantity;

    const riskPercent = (tradeValue / balance) * 100;

    if (riskPercent > 10) {
      warnings.push({
        type: "danger",
        message: "⚠️ You are risking too much on this trade",
      });
    } else if (riskPercent > 5) {
      warnings.push({
        type: "warning",
        message: "⚠️ High risk trade. Be cautious",
      });
    }
  }

  // 🟡 2. Overtrading
  if (trades.length >= 5) {
    warnings.push({
      type: "warning",
      message: "⚠️ Overtrading reduces discipline",
    });
  }

  // 🟡 3. Low Discipline
  if (disciplineScore < 40 && trades.length > 3) {
    warnings.push({
      type: "danger",
      message:
        "⚠️ Your discipline is low. Focus on quality trades",
    });
  }

  // 🟡 4. No Stop-Loss Behavior (basic simulation)
  if (trades.length >= 3) {
    const bigLoss = trades.some((t) => t.pl < -2000);

    if (bigLoss) {
      warnings.push({
        type: "danger",
        message:
          "⚠️ Large losses detected. Control risk better",
      });
    }
  }

  return warnings;
};