import { useEffect, useRef } from "react";

import {
  createChart,
  CandlestickSeries,
  LineSeries,
} from "lightweight-charts";

const ChartPractice = ({ moduleId }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 420,

      layout: {
        background: {
          color: "#0f172a",
        },

        textColor: "#ffffff",
      },

      grid: {
        vertLines: {
          color: "#1e293b",
        },

        horzLines: {
          color: "#1e293b",
        },
      },
    });

    // MODULE 1 → LINE CHART

    if (moduleId === 1) {
      const lineSeries = chart.addSeries(LineSeries);

      lineSeries.setData([
        { time: "2025-01-01", value: 100 },
        { time: "2025-01-02", value: 110 },
        { time: "2025-01-03", value: 105 },
        { time: "2025-01-04", value: 125 },
      ]);
    }

    // MODULE 2 → SUPPORT & RESISTANCE

    else if (moduleId === 2) {
      const candleSeries =
        chart.addSeries(CandlestickSeries);

      candleSeries.setData([
        {
          time: "2025-01-01",
          open: 100,
          high: 110,
          low: 95,
          close: 108,
        },

        {
          time: "2025-01-02",
          open: 108,
          high: 112,
          low: 102,
          close: 104,
        },

        {
          time: "2025-01-03",
          open: 104,
          high: 109,
          low: 98,
          close: 100,
        },

        {
          time: "2025-01-04",
          open: 100,
          high: 106,
          low: 97,
          close: 105,
        },
      ]);
    }

    // MODULE 3 → CANDLESTICKS

    else if (moduleId === 3) {
      const candleSeries =
        chart.addSeries(CandlestickSeries);

      candleSeries.setData([
        {
          time: "2025-01-01",
          open: 100,
          high: 120,
          low: 90,
          close: 115,
        },

        {
          time: "2025-01-02",
          open: 115,
          high: 130,
          low: 110,
          close: 125,
        },

        {
          time: "2025-01-03",
          open: 125,
          high: 140,
          low: 120,
          close: 135,
        },

        {
          time: "2025-01-04",
          open: 135,
          high: 145,
          low: 130,
          close: 132,
        },
      ]);
    }

    // MODULE 4 → BREAKOUT

    else if (moduleId === 4) {
      const candleSeries =
        chart.addSeries(CandlestickSeries);

      candleSeries.setData([
        {
          time: "2025-01-01",
          open: 100,
          high: 102,
          low: 99,
          close: 101,
        },

        {
          time: "2025-01-02",
          open: 101,
          high: 103,
          low: 100,
          close: 102,
        },

        {
          time: "2025-01-03",
          open: 102,
          high: 105,
          low: 101,
          close: 104,
        },

        {
          time: "2025-01-04",
          open: 104,
          high: 125,
          low: 103,
          close: 122,
        },
      ]);
    }

    // MODULE 5 → RSI STYLE

    else if (moduleId === 5) {
      const lineSeries =
        chart.addSeries(LineSeries);

      lineSeries.setData([
        { time: "2025-01-01", value: 45 },
        { time: "2025-01-02", value: 55 },
        { time: "2025-01-03", value: 68 },
        { time: "2025-01-04", value: 74 },
      ]);
    }

    // MODULE 6 → VOLUME

    else if (moduleId === 6) {
      const candleSeries =
        chart.addSeries(CandlestickSeries);

      candleSeries.setData([
        {
          time: "2025-01-01",
          open: 90,
          high: 100,
          low: 88,
          close: 95,
        },

        {
          time: "2025-01-02",
          open: 95,
          high: 110,
          low: 94,
          close: 108,
        },

        {
          time: "2025-01-03",
          open: 108,
          high: 115,
          low: 105,
          close: 112,
        },

        {
          time: "2025-01-04",
          open: 112,
          high: 125,
          low: 110,
          close: 122,
        },
      ]);
    }

    // MODULE 7 → TREND

    else if (moduleId === 7) {
      const lineSeries =
        chart.addSeries(LineSeries);

      lineSeries.setData([
        { time: "2025-01-01", value: 50 },
        { time: "2025-01-02", value: 58 },
        { time: "2025-01-03", value: 63 },
        { time: "2025-01-04", value: 68 },
      ]);
    }

    // MODULE 8 → RISK MANAGEMENT

    else if (moduleId === 8) {
      const candleSeries =
        chart.addSeries(CandlestickSeries);

      candleSeries.setData([
        {
          time: "2025-01-01",
          open: 200,
          high: 205,
          low: 190,
          close: 195,
        },

        {
          time: "2025-01-02",
          open: 195,
          high: 198,
          low: 180,
          close: 185,
        },

        {
          time: "2025-01-03",
          open: 185,
          high: 190,
          low: 175,
          close: 178,
        },

        {
          time: "2025-01-04",
          open: 178,
          high: 182,
          low: 170,
          close: 175,
        },
      ]);
    }

    chart.timeScale().fitContent();

    const resize = () => {
      chart.applyOptions({
        width: chartRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);

      chart.remove();
    };
  }, [moduleId]);

  const moduleInfo = {
    1: {
      title: "Understanding Price Movement",

      description:
        "This line represents how stock prices move over time.",
    },

    2: {
      title: "Support & Resistance",

      description:
        "Observe how prices react near important support and resistance zones.",
    },

    3: {
      title: "Understanding Candlesticks",

      description:
        "Green candles show buyers are stronger. Red candles show sellers are stronger.",
    },

    4: {
      title: "Breakout Strategy",

      description:
        "Observe consolidation followed by aggressive breakout momentum.",
    },

    5: {
      title: "RSI Indicator",

      description:
        "RSI helps traders identify momentum and overbought conditions.",
    },

    6: {
      title: "Volume Analysis",

      description:
        "Volume spikes help confirm strong market participation.",
    },

    7: {
      title: "Trend Following",

      description:
        "Trend continuation setups help traders follow market direction.",
    },

    8: {
      title: "Risk Management",

      description:
        "Risk management protects traders from large losses.",
    },
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">
            Guided Chart Practice
          </h2>

          <p className="text-gray-400 mt-1">
            Interactive visual explanation for this topic
          </p>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500 rounded-3xl p-5 mb-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">
            {moduleInfo[moduleId]?.title}
          </h3>

          <p className="text-gray-300">
            {moduleInfo[moduleId]?.description}
          </p>
        </div>
      </div>

      <div
        ref={chartRef}
        className="w-full rounded-3xl overflow-hidden border border-gray-800"
      />
    </div>
  );
};

export default ChartPractice;