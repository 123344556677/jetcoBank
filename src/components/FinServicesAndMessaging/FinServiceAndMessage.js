import LineChart from "components/Chart/LineChart";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { systemSettingsDownloadlineChartData } from "mock-data/ChartsData";
import { finServicesAndMessagingTransactionlineChartData } from "mock-data/ChartsData";
import { systemSettingLineChartData } from "mock-data/ChartsData";
import { FinServicingAndMessagingHeading } from "mock-data/Data";
import { finServicingAndMessagingData } from "mock-data/Data";
import React from "react";
import { Col, Row } from "reactstrap";
const FinServiceAndMessage = () => {
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
            <LineChart chartData={finServicesAndMessagingTransactionlineChartData} component="SystemSettingsDownloads"/>
            </div>
        </Col>
      </Row>
      <div className="main-div mt-4 ml-2 mr-3">
        <br />
        <div className="d-flex justify-content-between align-items-center mr-lg-3">
          <h3 className="m-4 pages-heading">Recent Transaction Activity</h3>
        </div>
        <DynamicTable
          headings={FinServicingAndMessagingHeading}
          tableData={finServicingAndMessagingData}
          component="FinServicesAndMessaging"
          parentComponent="FinServicesAndMessaging"
        />
      </div>
    </div>
  );
};

export default FinServiceAndMessage;
