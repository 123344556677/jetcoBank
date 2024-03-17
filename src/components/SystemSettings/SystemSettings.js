import LineChart from "components/Chart/LineChart";
import PreviousMessages from "components/Inbox/PreviousMessages";
import { systemSettingsDownloadlineChartData } from "mock-data/ChartsData";
import { systemSettingLineChartData } from "mock-data/ChartsData";
import { previousMessages } from "mock-data/Data";
import React from "react";
import { Col, Row } from "reactstrap";

const SystemSettings = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <Row className="w-100">
        <Col xl={7}>
          <div className="line-chart-wrapper ml-lg-2 mrl-lg-2 p-3" style={{border:"1px solid #8FE40F"}}>
            <LineChart chartData={systemSettingLineChartData} component="SystemSettingsCrypto" />
          </div>
        </Col>
        <Col xl={5}>
          <div className="line-chart-wrapper ml-lg-2 mrl-lg-2 p-3" style={{border:"1px solid #8FE40F"}}>
            <LineChart chartData={systemSettingsDownloadlineChartData} component="SystemSettingsDownloads"/>
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
