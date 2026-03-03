import { useState } from "react";
import { useTrading } from "../context/TradingContext";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

const lotSizes = {
  NIFTY: 50,
  BANKNIFTY: 15,
  RELIANCE: 1,
  TCS: 1,
  INFY: 1,
  HDFCBANK: 1,
};

const Trade = () => {
  const { balance, placeTrade } = useTrading();
  const [amount, setAmount] = useState("");
  const [asset, setAsset] = useState("RELIANCE");

  const xp = parseInt(localStorage.getItem("learnXP")) || 0;

  const getMaxRisk = () => {
    if (xp >= 1000) return 5;
    if (xp >= 700) return 4;
    if (xp >= 400) return 4;
    if (xp >= 200) return 3;
    return 2;
  };

  const maxRiskPercent = getMaxRisk();

  const calculateCharges = (tradeValue) => {
    const brokerage = 20;
    const stt = tradeValue * 0.00025;
    const exchange = tradeValue * 0.000035;
    const gst = brokerage * 0.18;

    return brokerage + stt + exchange + gst;
  };

  const handleTrade = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    const tradeValue = Number(amount);

    const lotSize = lotSizes[asset];

    if (tradeValue % lotSize !== 0) {
      alert(`Must trade in multiples of lot size (${lotSize})`);
      return;
    }

    const riskPercent = ((tradeValue / balance) * 100).toFixed(2);

    if (riskPercent > maxRiskPercent) {
      alert(
        `Risk exceeds allowed ${maxRiskPercent}% for your level. Reduce position size.`
      );
      return;
    }

    const charges = calculateCharges(tradeValue);

    placeTrade(tradeValue, asset, charges);

    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">NSE Trading Terminal</h1>

      {/* Balance */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
        <p className="text-gray-400">Available Capital</p>
        <h2 className="text-4xl font-bold text-green-400 mt-2">
          {formatINR(balance)}
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          Max Risk Allowed: {maxRiskPercent}%
        </p>
      </div>

      {/* Trade Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 mt-6">
        <select
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white outline-none mb-4"
        >
          {Object.keys(lotSizes).map((a) => (
            <option key={a} value={a}>
              {a} (Lot: {lotSizes[a]})
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantity (Lot multiple)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white outline-none"
        />

        <button
          onClick={handleTrade}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 p-2 rounded font-semibold"
        >
          Execute Trade
        </button>
      </div>

      {/* SEBI Warning */}
      <p className="text-xs text-gray-500 mt-8 text-center max-w-md">
        Trading in securities market involves market risks. Read all the
        related documents carefully before investing.
      </p>
    </div>
  );
};

export default Trade;