export const getAICoachMessage = ({
  trades,
  openPosition,
  balance,
  disciplineScore,
  price,
}) => {
  if (!trades.length) {
    return "👋 Welcome! Start with small trades. Focus on learning, not profits.";
  }

  if (!price || price === 0) {
    return "⏳ Market data loading... If delay continues, simulated prices are being used.";
  }

  if (openPosition) {
    return `📊 You are in a ${openPosition.type} position.
Watch P/L movement. Don't panic — wait for your plan.`;
  }

  if (disciplineScore < 40) {
    return "⚠️ You’re overtrading or taking bad risks. Take a break.";
  }

  if (trades.length > 5) {
    return "⚠️ Too many trades. Focus on quality setups.";
  }

  if (disciplineScore > 70) {
    return "✅ Great discipline. This is how pros trade.";
  }

  return "📊 Wait for the right setup. Trading is patience.";
};