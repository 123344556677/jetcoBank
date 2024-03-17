import React from "react";
import Chart from "react-apexcharts";
import { Button } from "reactstrap";

const BarChart = ({ component }) => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "10%",
        borderRadius: 20, // Set border radius to 20px
        rounded: true, // Round all borders
        borderWidth: 0, // Remove border width to ensure the border radius is visible
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["1h", "2h", "3h", "4h", "5h", "6h"], // Adjust categories to hours
      labels: {
        formatter: function (val) {
          return val;
        },
      },
      axisBorder: {
        show: false, // Hide the line above the x-axis
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return "$" + val + "k"; // Format y-axis values as dollars
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#8EE30A"], // Set bar color to green
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
    grid: {
      show: false, // Hide gridlines
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [30, 40, 45, 50, 49, 60],
    },
  ];

  return (
    <div className="chart-container">
      <Chart options={options} series={series} type="bar" height={350} />
      {component === "WealthAndManagement" && (
        <Button className="btn wealth-assets-button">Total Assets</Button>
      )}
    </div>
  );
};

export default BarChart;
