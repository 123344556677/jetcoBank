import LineChart from "components/Chart/LineChart";
import CustomDropDown from "components/DropDown/DropDown";
import PreviousMessages from "components/Inbox/PreviousMessages";
import { systemSettingsDownloadlineChartData } from "mock-data/ChartsData";
import { systemSettingLineChartData } from "mock-data/ChartsData";
import { weekData } from "mock-data/Data";
import { monthData } from "mock-data/Data";
import { yearData } from "mock-data/Data";
import { previousMessages } from "mock-data/Data";
import React from "react";
import { Col, Row } from "reactstrap";

const SystemSettings = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <Row className="w-100">
        <Col xl={7}>
          <div
            className="line-chart-wrapper ml-lg-2 mrl-lg-2 p-3"
            style={{ border: "1px solid #8FE40F" }}
          >
            <div className="d-flex align-items-center justify-content-between m-2">
              <h1 className="charts-crypto-heading">Crypto Rates</h1>
              <div className="d-flex">
                <CustomDropDown
                  heading="Week"
                  items={weekData}
                  className="settings-drop-down"
                />
                <CustomDropDown
                  heading="Month"
                  items={monthData}
                  className="settings-drop-down"
                />
                <CustomDropDown
                  heading="Year"
                  items={yearData}
                  className="settings-drop-down"
                />
              </div>
            </div>
            <LineChart
              chartData={systemSettingLineChartData}
              component="SystemSettingsCrypto"
              height="323"
            />
          </div>
        </Col>
        <Col xl={5}>
          <div
            className="line-chart-wrapper ml-lg-2 mrl-lg-2 p-3"
            style={{ border: "1px solid #8FE40F" }}
          >
            <div className="d-flex justify-content-between m-1">
              <div>
                <h1 className="charts-crypto-heading mb-0">
                  JETCO App Download
                </h1>
                <h2 className="charts-download-heading mt-1">Download</h2>
              </div>
              <div className="d-flex">
                <CustomDropDown
                  heading="Week"
                  items={weekData}
                  className="settings-second-drop-down"
                />
                <CustomDropDown
                  heading="Month"
                  items={monthData}
                  className="settings-second-drop-down"
                />
                <CustomDropDown
                  heading="Year"
                  items={yearData}
                  className="settings-second-drop-down"
                />
              </div>
            </div>
            <LineChart
              chartData={systemSettingsDownloadlineChartData}
              component="SystemSettingsDownloads"
              height="320"
            />
          </div>
        </Col>
      </Row>
      <div className="main-div">
        <PreviousMessages messagesData={previousMessages} />
      </div>
    </div>
  );
};

export default SystemSettings;
