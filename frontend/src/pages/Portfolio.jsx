import React, { useEffect, useState } from "react";

const formatINR = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
};

const Portfolio = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const storedTrades = localStorage.getItem("tradeHistory");
    if (storedTrades) {
      setTrades(JSON.parse(storedTrades));
    }
  }, []);

  const totalPL = trades.reduce((acc, t) => acc + t.pl, 0);
  const openTrades = trades.filter((t) => !t.exit);
  const closedTrades = trades.filter((t) => t.exit);

  const accountSize = 100000 + totalPL;

  const totalRiskExposure = openTrades.reduce(
    (acc, t) => acc + (t.riskPercent || 0),
    0
  );

  const riskStatus =
    totalRiskExposure > 5
      ? "Overexposed"
      : totalRiskExposure > 3
      ? "High"
      : "Controlled";

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        <p className="text-gray-400 mt-1">
          Review your positions. Analyze your discipline.
        </p>
      </div>

      {/* RISK OVERVIEW */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h2 className="text-lg font-semibold text-white mb-4">
          Risk Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <Metric label="Trading Capital" value={formatINR(accountSize)} />
          <Metric label="Open Trades" value={openTrades.length} />
          <Metric
            label="Total Risk %"
            value={`${totalRiskExposure.toFixed(2)}%`}
          />
          <Metric
            label="Risk Status"
            value={riskStatus}
            highlight={
              riskStatus === "Overexposed"
                ? "text-red-400"
                : riskStatus === "High"
                ? "text-yellow-400"
                : "text-green-400"
            }
          />
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h2 className="text-lg font-semibold text-white mb-4">
          Open Positions
        </h2>

        {openTrades.length === 0 ? (
          <p className="text-gray-500 text-sm">No open trades currently.</p>
        ) : (
          <Table trades={openTrades} />
        )}
      </div>

      {/* TRADE HISTORY */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h2 className="text-lg font-semibold text-white mb-4">
          Trade History
        </h2>

        {closedTrades.length === 0 ? (
          <p className="text-gray-500 text-sm">No closed trades yet.</p>
        ) : (
          <Table trades={closedTrades} history />
        )}
      </div>
    </div>
  );
};

const Table = ({ trades, history }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-400">
      <thead className="text-xs uppercase bg-gray-800 text-gray-300">
        <tr>
          <th className="px-4 py-3">Asset</th>
          <th className="px-4 py-3">Entry</th>
          {history && <th className="px-4 py-3">Exit</th>}
          <th className="px-4 py-3">P/L</th>
          <th className="px-4 py-3">Risk %</th>
          <th className="px-4 py-3">Journal</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((trade, index) => (
          <tr
            key={index}
            className="border-b border-gray-800 hover:bg-gray-800 transition"
          >
            <td className="px-4 py-3 text-white">{trade.asset}</td>
            <td className="px-4 py-3">{formatINR(trade.entry)}</td>
            {history && (
              <td className="px-4 py-3">
                {trade.exit ? formatINR(trade.exit) : "-"}
              </td>
            )}
            <td
              className={`px-4 py-3 font-medium ${
                trade.pl > 0
                  ? "text-green-400"
                  : trade.pl < 0
                  ? "text-red-400"
                  : "text-gray-400"
              }`}
            >
              {formatINR(trade.pl)}
            </td>
            <td className="px-4 py-3">{trade.riskPercent || 0}%</td>
            <td className="px-4 py-3 text-gray-300">
              {trade.note || "—"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Metric = ({ label, value, highlight }) => (
  <div>
    <p className="text-gray-400">{label}</p>
    <p className={`font-medium ${highlight || "text-white"}`}>{value}</p>
  </div>
);

export default Portfolio;