import { useTrading } from "../context/TradingContext";
import { calculateDisciplineScore } from "../utils/calculateDiscipline";

const Dashboard = () => {
  const { balance, trades = [], achievements = [] } = useTrading();

  const formatINR = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val || 0);

  const totalPL = trades.reduce((acc, t) => acc + (t.pl || 0), 0);

  const wins = trades.filter((t) => t.pl > 0).length;

  const winRate = trades.length
    ? ((wins / trades.length) * 100).toFixed(1)
    : 0;

  const disciplineScore = calculateDisciplineScore(trades);

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard 🇮🇳
      </h1>

      {/* 📊 Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card title="Balance" value={formatINR(balance)} />

        <Card
          title="Total P/L"
          value={formatINR(totalPL)}
          highlight
          positive={totalPL >= 0}
        />

        <Card title="Win Rate" value={`${winRate}%`} />

        <Card title="Discipline" value={`${disciplineScore}`} />
      </div>

      {/* 🏆 Achievements */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">
          Achievements
        </h2>

        {achievements.length === 0 ? (
          <p className="text-gray-400">
            Complete trades to unlock achievements.
          </p>
        ) : (
          <ul className="space-y-2">
            {achievements.map((a, i) => (
              <li
                key={i}
                className="bg-gray-700 p-3 rounded"
              >
                {a}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Card = ({ title, value, highlight, positive }) => (
  <div className="bg-gray-800 p-6 rounded-xl">
    <p className="text-gray-400">{title}</p>
    <h2
      className={`text-2xl font-bold mt-2 ${
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