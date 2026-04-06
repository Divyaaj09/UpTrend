import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  LineSeries,
} from "lightweight-charts";

const Chart = ({ data, emaData, rsiData }) => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  const candleSeriesRef = useRef(null);
  const emaSeriesRef = useRef(null);
  const rsiSeriesRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ✅ Create chart once
    chartRef.current = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: "#111827" },
        textColor: "#DDD",
      },
      grid: {
        vertLines: { color: "#1f2937" },
        horzLines: { color: "#1f2937" },
      },
    });

    // 🕯️ Candles
    candleSeriesRef.current = chartRef.current.addSeries(CandlestickSeries);

    // 📈 EMA
    emaSeriesRef.current = chartRef.current.addSeries(LineSeries, {
      color: "#facc15",
      lineWidth: 2,
    });

    // 📉 RSI
    rsiSeriesRef.current = chartRef.current.addSeries(LineSeries, {
      color: "#38bdf8",
      lineWidth: 2,
    });

    return () => chartRef.current.remove();
  }, []);

  // Update candles
  useEffect(() => {
    if (data.length && candleSeriesRef.current) {
      candleSeriesRef.current.setData(data);
    }
  }, [data]);

  // Update EMA
  useEffect(() => {
    if (emaData.length && emaSeriesRef.current) {
      emaSeriesRef.current.setData(emaData);
    }
  }, [emaData]);

  // Update RSI
  useEffect(() => {
    if (rsiData.length && rsiSeriesRef.current) {
      rsiSeriesRef.current.setData(rsiData);
    }
  }, [rsiData]);

  return <div ref={containerRef} className="w-full" />;
};

export default Chart;