import React, { useEffect, useState } from "react";
import "./LanguageChartComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChartHorizontal } from "@swisscom/sdx";
const LanguageChart = ({ length, language, chartRef }: { length: number; language: string; chartRef: any }) => {
  const [germanbarChart, setGermanbarChart] = useState<BarChartHorizontal>();

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new BarChartHorizontal(chartRef.current);
    setGermanbarChart(chart);
  }, [chartRef]);

  return (
    <div ref={chartRef} className="bar-chart-horizontal bar-chart-horizontal--limited" data-max="100" data-unit="%">
      <div className="js-data-list">
        <div className="js-data" data-value={length} data-color="iris">{language}</div>
      </div>
      <div className="detail-left">{language}</div>
      <div className="bar-chart__progress"></div>
      <div className="detail-bottom"></div>
    </div>
  );
};

export default LanguageChart;
