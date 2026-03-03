import { useMemo } from "react";
import { useTrading } from "../context/TradingContext";
import { calculateDisciplineScore } from "../utils/calculateDiscipline";

const Dashboard = () => {
  const trading = useTrading() || {};

  const balance = trading.balance ?? 0;
  const trades = Array.isArray(trading.trades)
    ? trading.trades
    : [];

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const totalPL = useMemo(() => {
    if (!trades.length) return 0;
    return trades.reduce((acc, trade) => acc + (trade.pl || 0), 0);
  }, [trades]);

  const winRate = useMemo(() => {
    if (!trades.length) return 0;
    const wins = trades.filter((t) => t.pl > 0).length;
    return ((wins / trades.length) * 100).toFixed(1);
  }, [trades]);

  const avgRisk = useMemo(() => {
    if (!trades.length) return 0;
    const totalRisk = trades.reduce(
      (acc, trade) => acc + (trade.riskPercent || 0),
      0
    );
    return (totalRisk / trades.length).toFixed(2);
  }, [trades]);

  const xp = parseInt(localStorage.getItem("learnXP")) || 0;

  const getMaxRisk = () => {
    if (xp >= 1000) return 5;
    if (xp >= 700) return 4;
    if (xp >= 400) return 4;
    if (xp >= 200) return 3;
    return 2;
  };

  const disciplineScore = calculateDisciplineScore(
    trades,
    getMaxRisk()
  );

  const getDisciplineColor = () => {
    if (disciplineScore >= 85) return "text-green-400";
    if (disciplineScore >= 70) return "text-blue-400";
    if (disciplineScore >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getDisciplineLabel = () => {
    if (disciplineScore >= 85) return "Elite Discipline";
    if (disciplineScore >= 70) return "Structured Trader";
    if (disciplineScore >= 50) return "Needs Improvement";
    return "High Risk Behavior";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">
        Indian Market Dashboard 🇮🇳
      </h1>

      {/* Capital Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Trading Capital"
          value={formatINR(balance)}
        />

        <Card
          title="Total P/L"
          value={formatINR(totalPL)}
          highlight
          positive={totalPL >= 0}
        />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card title="Win Rate" value={`${winRate}%`} />
        <Card title="Average Risk %" value={`${avgRisk}%`} />
        <Card title="Total Trades" value={trades.length} />
      </div>

      {/* Discipline */}
      <div className="mt-10 bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Discipline Analytics
        </h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400">Discipline Score</p>
            <h3
              className={`text-4xl font-bold ${getDisciplineColor()}`}
            >
              {disciplineScore} / 100
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              {getDisciplineLabel()}
            </p>
          </div>

          <div className="w-1/2">
            <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
              <div
                className="h-4 bg-green-500 transition-all duration-500"
                style={{ width: `${disciplineScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, highlight, positive }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
    <p className="text-gray-400">{title}</p>
    <h2
      className={`text-3xl font-bold mt-2 ${
        highlight
          ? positive
            ? "text-green-400"
            : "text-red-400"
          : ""
      }`}
    >
      {value}
    </h2>
  </div>
);

export default Dashboard;