// src/pages/Trade.jsx

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  createChart,
  CandlestickSeries,
} from "lightweight-charts";

import {
  TrendingUp,
  TrendingDown,
  Wallet,
  Trophy,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

import {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

// ==========================================
// STOCKS
// ==========================================

const STOCKS = [

  {
    symbol: "INFY",
    name: "Infosys",
    price: 1450,
  },

  {
    symbol: "RELIANCE",
    name: "Reliance",
    price: 2850,
  },

  {
    symbol: "TCS",
    name: "TCS",
    price: 3900,
  },

  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    price: 1650,
  },

];

// ==========================================
// GENERATE CANDLES
// ==========================================

const generateCandles = (
  basePrice
) => {

  let base = basePrice;

  let data = [];

  for (let i = 1; i <= 40; i++) {

    const open = base;

    const close =
      open +
      (Math.random() - 0.5) * 50;

    const high =
      Math.max(open, close) +
      Math.random() * 20;

    const low =
      Math.min(open, close) -
      Math.random() * 20;

    data.push({
      time: i,
      open: +open.toFixed(2),
      high: +high.toFixed(2),
      low: +low.toFixed(2),
      close: +close.toFixed(2),
    });

    base = close;
  }

  return data;
};

const Trade = () => {

  const { user } = useAuth();

  const chartRef = useRef();

  // ==========================================
  // STATES
  // ==========================================

  const [selectedStock, setSelectedStock] =
    useState("INFY");

  const selectedStockData =
    STOCKS.find(
      (s) =>
        s.symbol === selectedStock
    );

  const [chartData, setChartData] =
    useState(
      generateCandles(
        selectedStockData.price
      )
    );

  const [balance, setBalance] =
    useState(0);

  const [positions, setPositions] =
    useState([]);

  const [quantity, setQuantity] =
    useState(1);

  const [xp, setXp] =
    useState(0);

  const [holdings, setHoldings] =
    useState({});

  const currentPrice =
    chartData[
      chartData.length - 1
    ]?.close || 0;

  // ==========================================
  // FETCH USER DATA
  // ==========================================

  useEffect(() => {

    const fetchUserData =
      async () => {

        if (!user) return;

        try {

          const userRef = doc(
            db,
            "users",
            user.uid
          );

          const userSnap =
            await getDoc(userRef);

          if (!userSnap.exists())
            return;

          const userData =
            userSnap.data();

          setBalance(
            userData.balance || 0
          );

          setXp(userData.xp || 0);

          setHoldings(
            userData.holdings || {}
          );

          // FETCH TRADES

          const tradesRef =
            collection(
              db,
              "users",
              user.uid,
              "trades"
            );

          const tradesSnap =
            await getDocs(tradesRef);

          const trades =
            tradesSnap.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data(),
              })
            );

          setPositions(trades);

        } catch (error) {

          console.error(error);
        }
      };

    fetchUserData();

  }, [user]);

  // ==========================================
  // RESET CHART ON STOCK CHANGE
  // ==========================================

  useEffect(() => {

    setChartData(
      generateCandles(
        selectedStockData.price
      )
    );

  }, [selectedStock]);

  // ==========================================
  // CHART
  // ==========================================

  useEffect(() => {

    const chart = createChart(
      chartRef.current,
      {
        width:
          chartRef.current.clientWidth,

        height: 500,

        layout: {
          background: {
            color: "#081327",
          },
          textColor: "#d1d5db",
        },

        grid: {
          vertLines: {
            color:
              "rgba(255,255,255,0.05)",
          },

          horzLines: {
            color:
              "rgba(255,255,255,0.05)",
          },
        },
      }
    );

    const series =
      chart.addSeries(
        CandlestickSeries,
        {
          upColor: "#22c55e",
          downColor: "#ef4444",

          wickUpColor: "#22c55e",
          wickDownColor: "#ef4444",

          borderVisible: false,
        }
      );

    series.setData(chartData);

    return () => chart.remove();

  }, [chartData]);

  // ==========================================
  // LIVE MARKET
  // ==========================================

  useEffect(() => {

    const interval =
      setInterval(() => {

        setChartData((prev) => {

          const last =
            prev[prev.length - 1];

          const open = last.close;

          const close =
            open +
            (Math.random() - 0.5) * 50;

          const high =
            Math.max(open, close) +
            Math.random() * 20;

          const low =
            Math.min(open, close) -
            Math.random() * 20;

          return [

            ...prev.slice(-40),

            {
              time: last.time + 1,

              open:
                +open.toFixed(2),

              high:
                +high.toFixed(2),

              low:
                +low.toFixed(2),

              close:
                +close.toFixed(2),
            },
          ];
        });

      }, 2500);

    return () =>
      clearInterval(interval);

  }, []);

  // ==========================================
  // BUY
  // ==========================================

  const handleBuy =
    async () => {

      if (!user) return;

      const total =
        currentPrice * quantity;

      if (balance < total) {

        alert(
          "Insufficient balance"
        );

        return;
      }

      try {

        const userRef = doc(
          db,
          "users",
          user.uid
        );

        const existingHolding =
          holdings[
            selectedStock
          ] || {
            quantity: 0,
            avgPrice: 0,
          };

        const newQuantity =
          existingHolding.quantity +
          quantity;

        const newAvgPrice =
          (
            (
              existingHolding.quantity *
              existingHolding.avgPrice
            ) +
            quantity *
              currentPrice
          ) / newQuantity;

        const updatedHoldings = {

          ...holdings,

          [selectedStock]: {
            quantity:
              newQuantity,

            avgPrice:
              newAvgPrice,
          },
        };

        // UPDATE FIRESTORE

        await updateDoc(userRef, {

          balance:
            balance - total,

          xp: xp + 20,

          holdings:
            updatedHoldings,
        });

        // SAVE TRADE

        await addDoc(
          collection(
            db,
            "users",
            user.uid,
            "trades"
          ),
          {
            stock:
              selectedStock,

            type: "LONG",

            entry:
              currentPrice,

            quantity,

            pnl: 0,

            createdAt:
              serverTimestamp(),
          }
        );

        // UPDATE UI

        setBalance(
          (prev) =>
            prev - total
        );

        setXp(
          (prev) =>
            prev + 20
        );

        setHoldings(
          updatedHoldings
        );

        // REFRESH POSITIONS

        setPositions((prev) => [
          ...prev,
          {
            stock:
              selectedStock,

            type: "LONG",

            entry:
              currentPrice,

            quantity,

            pnl: 0,
          },
        ]);

      } catch (error) {

        console.error(error);
      }
    };

  // ==========================================
  // SHORT SELL
  // ==========================================

  const handleShort =
    async () => {

      if (!user) return;

      try {

        await addDoc(
          collection(
            db,
            "users",
            user.uid,
            "trades"
          ),
          {
            stock:
              selectedStock,

            type: "SHORT",

            entry:
              currentPrice,

            quantity,

            pnl: 0,

            createdAt:
              serverTimestamp(),
          }
        );

        setPositions((prev) => [
          ...prev,
          {
            stock:
              selectedStock,

            type: "SHORT",

            entry:
              currentPrice,

            quantity,

            pnl: 0,
          },
        ]);

        setXp(
          (prev) =>
            prev + 25
        );

      } catch (error) {

        console.error(error);
      }
    };

  // ==========================================
  // CLOSE POSITION
  // ==========================================

  const closeTrade =
    async (trade) => {

      if (!user) return;

      let profit = 0;

      if (trade.type === "LONG") {

        profit =
          (
            currentPrice -
            trade.entry
          ) * trade.quantity;

      } else {

        profit =
          (
            trade.entry -
            currentPrice
          ) * trade.quantity;
      }

      try {

        const userRef = doc(
          db,
          "users",
          user.uid
        );

        let updatedBalance =
          balance;

        // LONG EXIT

        if (
          trade.type === "LONG"
        ) {

          updatedBalance +=
            currentPrice *
            trade.quantity;

          const updatedHoldings =
            {
              ...holdings,
            };

          if (
            updatedHoldings[
              trade.stock
            ]
          ) {

            updatedHoldings[
              trade.stock
            ].quantity -=
              trade.quantity;

            if (
              updatedHoldings[
                trade.stock
              ].quantity <= 0
            ) {

              delete updatedHoldings[
                trade.stock
              ];
            }
          }

          await updateDoc(
            userRef,
            {
              balance:
                updatedBalance,

              xp: xp + 50,

              holdings:
                updatedHoldings,
            }
          );

          setHoldings(
            updatedHoldings
          );

        } else {

          updatedBalance +=
            profit;

          await updateDoc(
            userRef,
            {
              balance:
                updatedBalance,

              xp: xp + 50,
            }
          );
        }

        setBalance(
          updatedBalance
        );

        setXp(
          (prev) =>
            prev + 50
        );

        // REMOVE POSITION

        setPositions((prev) =>
          prev.filter(
            (p) => p !== trade
          )
        );

        alert(
          `Trade Closed | P/L: ₹${profit.toFixed(
            2
          )}`
        );

      } catch (error) {

        console.error(error);
      }
    };

  // ==========================================
  // TOTAL PNL
  // ==========================================

  const totalPnL =
    positions.reduce(
      (acc, trade) => {

        let pnl = 0;

        if (
          trade.type === "LONG"
        ) {

          pnl =
            (
              currentPrice -
              trade.entry
            ) * trade.quantity;

        } else {

          pnl =
            (
              trade.entry -
              currentPrice
            ) * trade.quantity;
        }

        return acc + pnl;

      },
      0
    );

  return (

    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-black">
              Paper Trading Terminal
            </h1>

            <p className="text-gray-400 mt-3">
              Practice real trading with simulated live charts
            </p>

          </div>

          <div className="flex gap-4">

            <div className="bg-[#081327] border border-gray-800 rounded-3xl px-6 py-5">

              <div className="text-gray-400 text-sm">
                Balance
              </div>

              <div className="text-3xl font-black mt-2">
                ₹
                {balance.toFixed(0)}
              </div>
            </div>

            <div className="bg-[#081327] border border-gray-800 rounded-3xl px-6 py-5">

              <div className="text-gray-400 text-sm">
                Live P/L
              </div>

              <div
                className={`text-3xl font-black mt-2 ${
                  totalPnL >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                ₹
                {totalPnL.toFixed(0)}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-3">

            <div className="bg-[#081327] border border-gray-800 rounded-[32px] p-6">

              {/* STOCKS */}

              <div className="flex gap-3 mb-8 flex-wrap">

                {STOCKS.map(
                  (stock) => (

                    <button
                      key={
                        stock.symbol
                      }

                      onClick={() =>
                        setSelectedStock(
                          stock.symbol
                        )
                      }

                      className={`px-5 py-3 rounded-2xl font-bold ${
                        selectedStock ===
                        stock.symbol
                          ? "bg-blue-600"
                          : "bg-gray-900"
                      }`}
                    >
                      {
                        stock.symbol
                      }
                    </button>
                  )
                )}
              </div>

              {/* PRICE */}

              <div className="flex justify-between items-center mb-8">

                <div>

                  <div className="text-gray-400">
                    Current Price
                  </div>

                  <div className="text-5xl font-black mt-2">
                    ₹
                    {currentPrice.toFixed(
                      2
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-400 font-bold">

                  <TrendingUp className="w-6 h-6" />

                  LIVE MARKET
                </div>
              </div>

              {/* CHART */}

              <div
                ref={chartRef}
                className="rounded-3xl overflow-hidden"
              />
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            {/* ORDER */}

            <div className="bg-[#081327] border border-gray-800 rounded-3xl p-6">

              <h2 className="text-3xl font-black mb-6">
                Place Trade
              </h2>

              <div className="mb-5">

                <div className="text-gray-400 mb-2">
                  Quantity
                </div>

                <input
                  type="number"

                  value={quantity}

                  onChange={(e) =>
                    setQuantity(
                      Number(
                        e.target.value
                      )
                    )
                  }

                  className="w-full bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 text-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <button
                  onClick={
                    handleBuy
                  }

                  className="py-4 bg-green-600 hover:bg-green-500 rounded-2xl font-black text-lg"
                >
                  BUY
                </button>

                <button
                  onClick={
                    handleShort
                  }

                  className="py-4 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-lg"
                >
                  SHORT
                </button>
              </div>
            </div>

            {/* XP */}

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">

                <Trophy className="w-7 h-7 text-yellow-400" />

                <div className="text-2xl font-black">
                  Trader XP
                </div>
              </div>

              <div className="text-5xl font-black">
                {xp}
              </div>

              <div className="text-gray-400 mt-2">
                Earn XP by practicing trades
              </div>
            </div>

            {/* INSIGHT */}

            <div className="bg-[#081327] border border-gray-800 rounded-3xl p-6">

              <div className="flex items-center gap-2 mb-4">

                <TrendingDown className="w-6 h-6 text-red-400" />

                <div className="font-black text-2xl">
                  AI Insight
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">

                Long trades benefit from rising prices.
                Short trades profit from falling prices.
                Watch momentum carefully before entering trades.

              </p>
            </div>
          </div>
        </div>

        {/* OPEN POSITIONS */}

        <div className="mt-10 bg-[#081327] border border-gray-800 rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-8">

            <Wallet className="w-8 h-8 text-blue-400" />

            <h2 className="text-4xl font-black">
              Open Positions
            </h2>
          </div>

          {positions.length === 0 ? (

            <div className="text-center py-16 text-gray-400 text-xl">
              No positions yet
            </div>

          ) : (

            <div className="space-y-5">

              {positions.map(
                (
                  trade,
                  index
                ) => {

                  let pnl = 0;

                  if (
                    trade.type ===
                    "LONG"
                  ) {

                    pnl =
                      (
                        currentPrice -
                        trade.entry
                      ) *
                      trade.quantity;

                  } else {

                    pnl =
                      (
                        trade.entry -
                        currentPrice
                      ) *
                      trade.quantity;
                  }

                  return (

                    <div
                      key={index}
                      className="bg-black/30 border border-gray-800 rounded-3xl p-6 flex justify-between items-center"
                    >

                      <div>

                        <div className="flex items-center gap-3">

                          <div className="text-2xl font-black">
                            {
                              trade.stock
                            }
                          </div>

                          <span
                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                              trade.type ===
                              "LONG"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {
                              trade.type
                            }
                          </span>
                        </div>

                        <div className="text-gray-400 mt-3">
                          Entry:
                          {" "}
                          ₹
                          {trade.entry}
                        </div>

                        <div className="text-gray-400">
                          Qty:
                          {" "}
                          {
                            trade.quantity
                          }
                        </div>
                      </div>

                      <div className="text-right">

                        <div
                          className={`text-3xl font-black ${
                            pnl >= 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          ₹
                          {pnl.toFixed(
                            2
                          )}
                        </div>

                        <button
                          onClick={() =>
                            closeTrade(
                              trade
                            )
                          }

                          className="mt-4 px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold"
                        >
                          Close Position
                        </button>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trade;