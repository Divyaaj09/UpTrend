import { useTrading } from "../context/TradingContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Portfolio = () => {
  const { trades, balance } = useTrading();

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

  // 🧠 Build Equity Curve
  let runningBalance = 100000;
  const equityData = trades.map((t, index) => {
    runningBalance += t.pl;

    return {
      name: `T${index + 1}`,
      balance: runningBalance,
    };
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">
        Portfolio Overview 🇮🇳
      </h1>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card title="Balance" value={formatINR(balance)} />

        <Card
          title="Total P/L"
          value={formatINR(totalPL)}
          highlight
          positive={totalPL >= 0}
        />

        <Card title="Win Rate" value={`${winRate}%`} />

        <Card title="Trades" value={trades.length} />
      </div>

      {/* 📊 Equity Curve Chart */}
      <div className="bg-gray-800 p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Equity Curve
        </h2>

        {equityData.length === 0 ? (
          <p className="text-gray-400">
            No data yet. Start trading to see performance.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={equityData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Trade History */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">
          Trade History
        </h2>

        {trades.length === 0 ? (
          <p className="text-gray-400">
            No trades yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="py-2">Asset</th>
                  <th>Type</th>
                  <th>Entry</th>
                  <th>Exit</th>
                  <th>Qty</th>
                  <th>P/L</th>
                </tr>
              </thead>

              <tbody>
                {trades.map((t, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td>{t.asset.replace(".NS", "")}</td>

                    <td
                      className={
                        t.type === "LONG"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {t.type}
                    </td>

                    <td>{formatINR(t.entryPrice)}</td>
                    <td>{formatINR(t.exitPrice)}</td>
                    <td>{t.quantity}</td>

                    <td
                      className={
                        t.pl >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {formatINR(t.pl)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// Card Component
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

export default Portfolio;