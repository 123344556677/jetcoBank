import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Chart.css";

const LineChart = ({ chartData, component,height }) => {
  const { series, options } = chartData;

  return (
    <div style={{ position: "relative" }}>
      <div id="chart" className={component==="WealthAndManagement"&&"mt-3"}>
     
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={height?height:380}
        />
        </div>
    </div>
  );
};

export default LineChart;
