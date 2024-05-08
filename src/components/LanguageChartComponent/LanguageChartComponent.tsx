import React, { useEffect, useState } from "react";
import "./LanguageChartComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChartHorizontal } from "@swisscom/sdx";
const LanguageChart = ({ length, language, color, chartRef }: { length: number; language: string; color: string; chartRef: any }) => {
  const [germanbarChart, setGermanbarChart] = useState<BarChartHorizontal>();

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new BarChartHorizontal(chartRef.current);
    setGermanbarChart(chart);
  }, [chartRef]);

  return (
    <div ref={chartRef} className="bar-chart-horizontal bar-chart-horizontal--unlimited" data-max="100" data-unit="%" data-precision="2">
      <div className="js-data-list">
        <div className="js-data" data-value={length} data-color={color}>Subscription</div>
      </div>
      <div className="bar-chart__detail">
        <div className="detail-left">Sandra’s Natel XL</div>
        <div className="detail-right"></div>
      </div>
      <div className="bar-chart__progress"></div>
    </div>
  );
};

export default LanguageChart;
