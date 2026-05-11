// src/pages/MarketReplay.jsx

import { useEffect, useState } from "react";

import {
  Play,
  Pause,
  RotateCcw,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  CandlestickChart,
} from "lucide-react";

const generateCandles = () => {

  let price = 85000;

  return Array.from({ length: 80 }, (_, i) => {

    const open = price;

    const change =
      (Math.random() - 0.5) * 1200;

    const close = open + change;

    const high =
      Math.max(open, close) +
      Math.random() * 400;

    const low =
      Math.min(open, close) -
      Math.random() * 400;

    price = close;

    return {
      time: i + 1,
      open,
      close,
      high,
      low,
    };
  });
};

const allCandles = generateCandles();

const formatINR = (value) => {

  return value.toLocaleString(
    "en-IN",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );
};

const MarketReplay = () => {

  const [index, setIndex] =
    useState(15);

  const [playing, setPlaying] =
    useState(false);

  const visibleCandles =
    allCandles.slice(0, index);

  const current =
    visibleCandles[
      visibleCandles.length - 1
    ];

  useEffect(() => {

    if (!playing) return;

    const interval = setInterval(() => {

      setIndex((prev) => {

        if (
          prev >= allCandles.length
        ) {

          return prev;
        }

        return prev + 1;
      });

    }, 800);

    return () =>
      clearInterval(interval);

  }, [playing]);

  const resetReplay = () => {

    setIndex(15);

    setPlaying(false);
  };

  return (

    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <div className="flex items-center gap-4 mb-3">

              <div className="bg-green-500/10 p-4 rounded-3xl">

                <CandlestickChart className="w-10 h-10 text-green-400" />

              </div>

              <div>

                <h1 className="text-5xl font-black">
                  Market Replay
                </h1>

                <p className="text-gray-400 text-lg mt-2">
                  Practice reading live-like market candles
                </p>

              </div>
            </div>
          </div>

          {/* CONTROLS */}

          <div className="flex gap-4">

            <button
              onClick={() =>
                setPlaying(!playing)
              }
              className="flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-500 rounded-2xl font-bold transition-all"
            >

              {playing ? (
                <>
                  <Pause className="w-5 h-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Start Replay
                </>
              )}
            </button>

            <button
              onClick={resetReplay}
              className="flex items-center gap-2 px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-2xl font-bold transition-all"
            >

              <RotateCcw className="w-5 h-5" />

              Reset
            </button>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-[#081327] border border-gray-800 rounded-3xl p-6">

            <Clock className="w-8 h-8 text-blue-400 mb-4" />

            <div className="text-3xl font-black">
              {current.time}
            </div>

            <div className="text-gray-400 mt-1">
              Candle Number
            </div>
          </div>

          <div className="bg-[#081327] border border-gray-800 rounded-3xl p-6">

            <TrendingUp className="w-8 h-8 text-green-400 mb-4" />

            <div className="text-3xl font-black">
              ₹
              {formatINR(
                current.high
              )}
            </div>

            <div className="text-gray-400 mt-1">
              High
            </div>
          </div>

          <div className="bg-[#081327] border border-gray-800 rounded-3xl p-6">

            <TrendingDown className="w-8 h-8 text-red-400 mb-4" />

            <div className="text-3xl font-black">
              ₹
              {formatINR(
                current.low
              )}
            </div>

            <div className="text-gray-400 mt-1">
              Low
            </div>
          </div>

          <div className="bg-[#081327] border border-gray-800 rounded-3xl p-6">

            <Activity className="w-8 h-8 text-purple-400 mb-4" />

            <div className="text-3xl font-black">
              ₹
              {formatINR(
                current.close
              )}
            </div>

            <div className="text-gray-400 mt-1">
              Current Price
            </div>
          </div>
        </div>

        {/* CHART */}

        <div className="bg-[#081327] border border-gray-800 rounded-[32px] p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-black">
              Candlestick Replay
            </h2>

            <div className="text-gray-400">

              Replay Progress:
              {" "}
              {index}
              /
              {allCandles.length}

            </div>
          </div>

          <div className="flex items-end gap-2 h-[420px] overflow-hidden">

            {visibleCandles.map(
              (candle, i) => {

                const bullish =
                  candle.close >
                  candle.open;

                const bodyHeight =
                  Math.abs(
                    candle.close -
                      candle.open
                  ) / 30;

                const wickHeight =
                  (candle.high -
                    candle.low) / 25;

                return (

                  <div
                    key={i}
                    className="flex flex-col items-center flex-1"
                  >

                    {/* WICK */}

                    <div
                      className={`w-[2px] ${
                        bullish
                          ? "bg-green-400"
                          : "bg-red-400"
                      }`}
                      style={{
                        height: `${wickHeight}px`,
                      }}
                    />

                    {/* BODY */}

                    <div
                      className={`w-full rounded-md transition-all duration-300 ${
                        bullish
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        height: `${Math.max(
                          bodyHeight,
                          12
                        )}px`,
                      }}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* LESSON */}

        <div className="mt-10 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-5">
            Replay Objective
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">

            Use replay mode to train your
            eyes for real market movement.
            Observe candle structure,
            momentum shifts, fake breakouts,
            trend continuation, and market
            psychology.

          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="px-5 py-3 bg-black/30 rounded-2xl">
              Trend Analysis
            </div>

            <div className="px-5 py-3 bg-black/30 rounded-2xl">
              Candle Psychology
            </div>

            <div className="px-5 py-3 bg-black/30 rounded-2xl">
              Breakout Detection
            </div>

            <div className="px-5 py-3 bg-black/30 rounded-2xl">
              Support & Resistance
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReplay;