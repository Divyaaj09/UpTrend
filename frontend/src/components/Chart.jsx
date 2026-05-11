import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  LineSeries,
  createSeriesMarkers,
} from "lightweight-charts";

const Chart = ({ data, emaData, rsiData, markers }) => {
  const containerRef = useRef(null);

  const mainChartRef = useRef(null);
  const rsiChartRef = useRef(null);

  const candleSeriesRef = useRef(null);
  const emaSeriesRef = useRef(null);
  const rsiSeriesRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // 🔝 MAIN CHART
    mainChartRef.current = createChart(container, {
      width: container.clientWidth,
      height: 300,
      layout: {
        background: { color: "#111827" },
        textColor: "#DDD",
      },
      grid: {
        vertLines: { color: "#1f2937" },
        horzLines: { color: "#1f2937" },
      },
    });

    candleSeriesRef.current =
      mainChartRef.current.addSeries(CandlestickSeries);

    emaSeriesRef.current =
      mainChartRef.current.addSeries(LineSeries, {
        color: "#facc15",
        lineWidth: 2,
      });

    // 🔽 RSI PANEL
    const rsiContainer = document.createElement("div");
    rsiContainer.style.marginTop = "10px";
    container.appendChild(rsiContainer);

    rsiChartRef.current = createChart(rsiContainer, {
      width: container.clientWidth,
      height: 150,
      layout: {
        background: { color: "#111827" },
        textColor: "#DDD",
      },
    });

    rsiSeriesRef.current =
      rsiChartRef.current.addSeries(LineSeries, {
        color: "#38bdf8",
        lineWidth: 2,
      });

    // RSI Levels
    rsiSeriesRef.current.createPriceLine({
      price: 70,
      color: "#ef4444",
      lineWidth: 1,
      lineStyle: 2,
      title: "Overbought",
    });

    rsiSeriesRef.current.createPriceLine({
      price: 30,
      color: "#22c55e",
      lineWidth: 1,
      lineStyle: 2,
      title: "Oversold",
    });

    return () => {
      mainChartRef.current.remove();
      rsiChartRef.current.remove();
    };
  }, []);

  // 🕯️ Candles
  useEffect(() => {
    if (data.length && candleSeriesRef.current) {
      candleSeriesRef.current.setData(data);
    }
  }, [data]);

  // 📈 EMA
  useEffect(() => {
    if (emaData.length && emaSeriesRef.current) {
      emaSeriesRef.current.setData(emaData);
    }
  }, [emaData]);

  // 📉 RSI
  useEffect(() => {
    if (rsiData.length && rsiSeriesRef.current) {
      rsiSeriesRef.current.setData(rsiData);
    }
  }, [rsiData]);

  // 🔥 MARKERS FIXED
  useEffect(() => {
    if (markers && candleSeriesRef.current) {
      createSeriesMarkers(candleSeriesRef.current, markers);
    }
  }, [markers]);

  return <div ref={containerRef} className="w-full" />;
};

export default Chart;