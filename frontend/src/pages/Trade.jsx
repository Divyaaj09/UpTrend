import { useEffect, useState } from "react";
import { useTrading } from "../context/TradingContext";
import { getRiskWarnings } from "../utils/riskWarnings";
import { calculateDisciplineScore } from "../utils/calculateDiscipline";
import { getAICoachMessage } from "../utils/aiCoach";
import Chart from "../components/Chart";

const stocksList = [
  { symbol: "RELIANCE.NS", name: "Reliance Industries" },
  { symbol: "TCS.NS", name: "Tata Consultancy Services" },
  { symbol: "INFY.NS", name: "Infosys" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
];

const Trade = () => {
  const {
    openTrade,
    closeTrade,
    openPosition,
    balance,
    trades = [],
  } = useTrading();

  const [selectedStock, setSelectedStock] = useState(stocksList[0]);
  const [price, setPrice] = useState(2500);
  const [prevPrice, setPrevPrice] = useState(2500);
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [emotion, setEmotion] = useState("Confident");

  const [chartData, setChartData] = useState([]);
  const [emaData, setEmaData] = useState([]);
  const [rsiData, setRsiData] = useState([]);

  const formatINR = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(val || 0);

  // 🔥 PRICE SIMULATION
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevPrice(price);
      setPrice((prev) => prev + (Math.random() - 0.5) * 10);
    }, 2000);

    return () => clearInterval(interval);
  }, [price]);

  // 📊 RESET CHART WHEN STOCK CHANGES
  useEffect(() => {
    let base = 2500;
    let initial = [];

    for (let i = 0; i < 30; i++) {
      const open = base;
      const close = open + (Math.random() - 0.5) * 10;
      const high = Math.max(open, close) + Math.random() * 5;
      const low = Math.min(open, close) - Math.random() * 5;

      base = close;

      initial.push({
        time: Math.floor(Date.now() / 1000) - (30 - i) * 60,
        open,
        high,
        low,
        close,
      });
    }

    setChartData(initial);
  }, [selectedStock]);

  // 📊 LIVE CANDLES
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const last = prev[prev.length - 1];
        const open = last.close;
        const close = open + (Math.random() - 0.5) * 10;
        const high = Math.max(open, close) + Math.random() * 5;
        const low = Math.min(open, close) - Math.random() * 5;

        return [
          ...prev.slice(-50),
          {
            time: Math.floor(Date.now() / 1000),
            open,
            high,
            low,
            close,
          },
        ];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 📈 EMA
  const calculateEMA = (data, period = 10) => {
    let k = 2 / (period + 1);
    let emaPrev = data[0]?.close || 0;

    return data.map((candle) => {
      let ema = candle.close * k + emaPrev * (1 - k);
      emaPrev = ema;

      return { time: candle.time, value: ema };
    });
  };

  // 📉 RSI
  const calculateRSI = (data, period = 14) => {
    let gains = 0,
      losses = 0,
      rsiArray = [];

    for (let i = 1; i < data.length; i++) {
      let diff = data[i].close - data[i - 1].close;
      if (diff >= 0) gains += diff;
      else losses -= diff;

      if (i >= period) {
        let rs = gains / (losses || 1);
        let rsi = 100 - 100 / (1 + rs);

        rsiArray.push({ time: data[i].time, value: rsi });
      }
    }
    return rsiArray;
  };

  useEffect(() => {
    setEmaData(calculateEMA(chartData));
    setRsiData(calculateRSI(chartData));
  }, [chartData]);

  const disciplineScore = calculateDisciplineScore(trades);
  const coachMessage = getAICoachMessage({
    trades,
    openPosition,
    balance,
    disciplineScore,
    price,
  });

  const handleBuy = () => {
    if (!quantity) return;
    openTrade({
      asset: selectedStock.symbol,
      type: "LONG",
      price,
      quantity: Number(quantity),
      journal: { note, emotion },
    });
  };

  const handleSell = () => {
    if (!quantity) return;
    openTrade({
      asset: selectedStock.symbol,
      type: "SHORT",
      price,
      quantity: Number(quantity),
      journal: { note, emotion },
    });
  };

  const pl =
    openPosition &&
    (openPosition.type === "LONG"
      ? (price - openPosition.entryPrice) * openPosition.quantity
      : (openPosition.entryPrice - price) * openPosition.quantity);

  return (
    <div className="h-screen flex bg-gray-900 text-white">

      {/* 📊 LEFT: CHART (STICKY) */}
      <div className="w-2/3 p-4 sticky top-0 h-screen">
        
        {/* HEADER */}
        <div className="flex justify-between mb-3">
          <div>
            <h1 className="text-xl font-bold">
              {selectedStock.name}
            </h1>
            <p className="text-gray-400 text-sm">
              {selectedStock.symbol}
            </p>
          </div>

          <div className="text-green-400 font-semibold">
            {formatINR(balance)}
          </div>
        </div>

        {/* STOCK SELECTOR */}
        <select
          value={selectedStock.symbol}
          onChange={(e) =>
            setSelectedStock(
              stocksList.find((s) => s.symbol === e.target.value)
            )
          }
          className="mb-3 bg-gray-800 p-2 rounded w-full"
        >
          {stocksList.map((stock) => (
            <option key={stock.symbol} value={stock.symbol}>
              {stock.name}
            </option>
          ))}
        </select>

        {/* PRICE */}
        <div
          className={`text-2xl mb-3 ${
            price > prevPrice ? "text-green-400" : "text-red-400"
          }`}
        >
          {formatINR(price)}
        </div>

        {/* CHART */}
        <Chart
          data={chartData}
          emaData={emaData}
          rsiData={rsiData}
        />
      </div>

      {/* 💰 RIGHT: TRADE PANEL */}
      <div className="w-1/3 p-6 overflow-y-auto">

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-3"
        />

        <textarea
          placeholder="Why this trade?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-3"
        />

        <select
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-4"
        >
          <option>Confident</option>
          <option>Fear</option>
          <option>FOMO</option>
          <option>Revenge</option>
        </select>

        <div className="flex gap-2 mb-4">
          <button onClick={handleBuy} className="bg-green-600 p-2 w-full">
            Buy
          </button>
          <button onClick={handleSell} className="bg-red-600 p-2 w-full">
            Sell
          </button>
        </div>

        <div className="bg-blue-600 p-3 rounded mb-4">
          {coachMessage}
        </div>

        {openPosition && (
          <div className="bg-gray-800 p-4 rounded">
            <p>P/L: {formatINR(pl)}</p>
            <button
              onClick={() => closeTrade(price)}
              className="bg-blue-500 p-2 mt-2 w-full"
            >
              Close Trade
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trade;