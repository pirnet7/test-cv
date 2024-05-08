import React, { useEffect, useState } from "react";
import "./LanguageChartComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChartHorizontal } from "@swisscom/sdx";
import { t } from "i18next";
const LanguageChart = ({ length, language, chartRef, langKnowledge }: { length: number; language: string; chartRef: any; langKnowledge: string }) => {
  const [germanbarChart, setGermanbarChart] = useState<BarChartHorizontal>();

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new BarChartHorizontal(chartRef.current);
    setGermanbarChart(chart);
  }, [chartRef]);

  return (
    <div ref={chartRef} className="bar-chart-horizontal bar-chart-horizontal--limited" data-max="100" data-unit="%">
      <p className="langKnowledge">{langKnowledge}</p>
      <div className="js-data-list">
        <div className="js-data" data-value={length} data-color="iris">{language}</div>
      </div>
      <div className="detail-left margin-bottom-2">{language}</div>
      <div className="bar-chart__progress"></div>
      <div className="detail-bottom"></div>
    </div>
  );
};

export default LanguageChart;
