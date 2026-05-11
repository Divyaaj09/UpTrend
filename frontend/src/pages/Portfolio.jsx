// src/pages/Portfolio.jsx

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useAuth } from "../context/AuthContext";

import {
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase";

import {
  Wallet,
  TrendingUp,
  Trophy,
  Activity,
  Target,
  ShieldCheck,
  Brain,
  CandlestickChart,
  Sparkles,
  BarChart3,
  Flame,
  Award,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Portfolio = () => {

  const { user } = useAuth();

  // =========================================
  // PORTFOLIO STATE
  // =========================================

  const [portfolio, setPortfolio] =
    useState({
      balance: 0,
      pnl: 0,
      trades: [],
      holdings: {},
    });

  const [loading, setLoading] =
    useState(true);

  // =========================================
  // FETCH FIREBASE DATA
  // =========================================

  useEffect(() => {

    const fetchPortfolio =
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

          if (!userSnap.exists()) {
            setLoading(false);
            return;
          }

          const userData =
            userSnap.data();

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

          // TOTAL PNL

          const totalPnL =
            trades.reduce(
              (acc, trade) =>
                acc + (trade.pnl || 0),
              0
            );

          setPortfolio({
            balance:
              userData.balance || 0,

            pnl: totalPnL,

            trades,

            holdings:
              userData.holdings || {},
          });

        } catch (error) {

          console.error(
            "Portfolio Error:",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchPortfolio();

  }, [user]);

  // =========================================
  // ANALYTICS
  // =========================================

  const totalTrades =
    portfolio.trades.length;

  const profitableTrades =
    portfolio.trades.filter(
      (trade) => trade.pnl > 0
    ).length;

  const winRate =
    totalTrades > 0
      ? Math.round(
          (profitableTrades /
            totalTrades) *
            100
        )
      : 0;

  // =========================================
  // TRADER PERSONALITY
  // =========================================

  const traderPersonality =
    useMemo(() => {

      if (winRate >= 75)
        return "Disciplined Trader";

      if (winRate >= 55)
        return "Momentum Trader";

      return "Developing Trader";

    }, [winRate]);

  // =========================================
  // METRICS
  // =========================================

  const metrics = [

    {
      title: "Risk Management",
      value: Math.min(
        95,
        50 + profitableTrades * 4
      ),
      icon: ShieldCheck,
    },

    {
      title: "Market Reading",
      value: Math.min(
        92,
        40 + totalTrades * 5
      ),
      icon: BarChart3,
    },

    {
      title: "Psychology",
      value: Math.min(
        90,
        50 + profitableTrades * 3
      ),
      icon: Brain,
    },

    {
      title: "Discipline",
      value: Math.min(
        96,
        45 + totalTrades * 4
      ),
      icon: Target,
    },

  ];

  // =========================================
  // ACHIEVEMENTS
  // =========================================

  const achievements = [

    profitableTrades >= 1 &&
      "First Profitable Trade",

    totalTrades >= 5 &&
      "Active Trader",

    winRate >= 70 &&
      "High Accuracy Trader",

    profitableTrades >= 10 &&
      "Consistency Master",

  ].filter(Boolean);

  // =========================================
  // AI INSIGHT
  // =========================================

  const aiInsight =
    useMemo(() => {

      if (totalTrades === 0) {

        return "Your portfolio journey starts here. Begin practicing with virtual trades.";
      }

      if (winRate >= 70) {

        return "Your discipline and trade selection are improving rapidly.";
      }

      if (winRate >= 50) {

        return "You are developing stable market understanding. Focus on risk consistency.";
      }

      return "Avoid emotional entries and improve setup confirmation before taking trades.";

    }, [winRate, totalTrades]);

  // =========================================
  // EQUITY CURVE
  // =========================================

  const equityData = [

    { day: "Mon", equity: 10000 },

    { day: "Tue", equity: 10200 },

    { day: "Wed", equity: 10120 },

    { day: "Thu", equity: 10550 },

    { day: "Fri", equity: 10900 },

  ];

  // =========================================
  // LOADING CHECK
  // =========================================

  if (loading) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl font-bold">

        Loading Portfolio...

      </div>
    );
  }

  // =========================================
  // MAIN UI
  // =========================================

  return (

    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="bg-gradient-to-br from-[#07142c] to-[#0c1835] border border-gray-800 rounded-[32px] p-10 mb-10">

          <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-4 mb-5">

                <div className="bg-blue-500/10 p-4 rounded-3xl">

                  <Wallet className="w-10 h-10 text-blue-400" />

                </div>

                <div>

                  <h1 className="text-5xl font-black">

                    Portfolio Command Center

                  </h1>

                  <p className="text-gray-400 text-lg mt-2">

                    Analyze performance, growth,
                    and trading behavior

                  </p>

                </div>
              </div>

              <div className="bg-black/30 border border-gray-800 rounded-3xl p-6 mt-8 inline-block">

                <div className="text-sm text-gray-400 mb-2">

                  Trader Personality

                </div>

                <div className="text-3xl font-black">

                  {traderPersonality}

                </div>

              </div>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6">

                <Wallet className="w-8 h-8 text-green-400 mb-4" />

                <div className="text-4xl font-black">

                  ₹{portfolio.balance.toFixed(2)}

                </div>

                <div className="text-gray-400 mt-1">

                  Account Balance

                </div>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6">

                <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />

                <div className="text-4xl font-black text-green-400">

                  ₹{portfolio.pnl.toFixed(2)}

                </div>

                <div className="text-gray-400 mt-1">

                  Total P/L

                </div>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6">

                <Activity className="w-8 h-8 text-purple-400 mb-4" />

                <div className="text-4xl font-black">

                  {winRate}%

                </div>

                <div className="text-gray-400 mt-1">

                  Win Rate

                </div>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6">

                <CandlestickChart className="w-8 h-8 text-orange-400 mb-4" />

                <div className="text-4xl font-black">

                  {totalTrades}

                </div>

                <div className="text-gray-400 mt-1">

                  Trades Recorded

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* HOLDINGS */}

        <div className="bg-[#081327] border border-gray-800 rounded-3xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <Wallet className="w-8 h-8 text-blue-400" />

            <h2 className="text-4xl font-black">

              Holdings

            </h2>
          </div>

          {Object.keys(
            portfolio.holdings
          ).length === 0 ? (

            <div className="text-gray-400 text-xl">

              No holdings yet

            </div>

          ) : (

            <div className="space-y-5">

              {Object.entries(
                portfolio.holdings
              ).map(
                ([symbol, data]) => (

                  <div
                    key={symbol}
                    className="bg-black/30 border border-gray-800 rounded-2xl p-6 flex justify-between items-center"
                  >

                    <div>

                      <div className="text-2xl font-black">

                        {symbol}

                      </div>

                      <div className="text-gray-400 mt-2">

                        Quantity:
                        {" "}
                        {data.quantity}

                      </div>
                    </div>

                    <div className="text-right">

                      <div className="text-xl text-gray-400">

                        Avg Price

                      </div>

                      <div className="text-3xl font-black text-green-400">

                        ₹
                        {data.avgPrice?.toFixed(
                          2
                        )}

                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;