import React, { useState, useEffect, useRef } from "react";
import "./LanguageChartComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChartHorizontal } from "@swisscom/sdx";

const LanguageChart = ({ color, length, language, chartRef }: { color: string; length: number; language: string; chartRef: React.RefObject<HTMLDivElement>; }) => {
  const [germanBarChart, setGermanBarChart] = useState<BarChartHorizontal>();

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new BarChartHorizontal(chartRef.current);
    setGermanBarChart(chart);
  }, [chartRef])

  return (
    <div className="container">
      <div className="row">
        <div
          ref={chartRef}
          className="bar-chart-horizontal bar-chart-horizontal--limited my-1"
          data-max="100"
          data-unit="%"
        >
          <div className="js-data-list">
            <div className="js-data" data-value={length} data-color={color}>
              {language}
            </div>
          </div>
          <div className="detail-left">{language}</div>
          <div className="bar-chart__progress"></div>
          <div className="detail-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default LanguageChart;
