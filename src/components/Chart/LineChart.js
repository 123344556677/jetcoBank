import React from "react";
import ReactApexChart from "react-apexcharts";
import './Chart.css'

const LineChart = ({ chartData }) => {
  const { series, options } = chartData;

  return (
    <div style={{ position: "relative" }}>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div className="line-chart-custom-labels">
        {series.map((data, index) => (
          <span key={index}>
            <div
              className={
                index > 0 ? "small-circle ml-lg-5" : " small-circle ml-lg-2"
              }
              style={{ backgroundColor: data.color }}
            ></div>
            <span className="small-circle-title ml-2">{data.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
