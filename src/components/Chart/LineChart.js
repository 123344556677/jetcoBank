import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Chart.css";
import CustomDropDown from "components/DropDown/DropDown";
import { weekData } from "mock-data/Data";
import { monthData } from "mock-data/Data";
import { yearData } from "mock-data/Data";

const LineChart = ({ chartData, component }) => {
  const { series, options } = chartData;

  return (
    <div style={{ position: "relative" }}>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={380}
        />
      </div>
      <div className="line-chart-custom-labels">
        {component === "Dashboard" &&
          series.map((data, index) => (
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
        {component === "SystemSettingsCrypto" && (
          <div className="d-flex">
            <CustomDropDown heading="Week" items={weekData} className="settings-drop-down" />
            <CustomDropDown heading="Month" items={monthData} className="settings-drop-down" />
            <CustomDropDown heading="Year" items={yearData} className="settings-drop-down" />
          </div>
        )}
        {component === "SystemSettingsDownloads" && (
          <div className="d-flex">
            <CustomDropDown heading="Week" items={weekData} className="settings-second-drop-down" />
            <CustomDropDown heading="Month" items={monthData} className="settings-second-drop-down" />
            <CustomDropDown heading="Year" items={yearData} className="settings-second-drop-down" />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default LineChart;
