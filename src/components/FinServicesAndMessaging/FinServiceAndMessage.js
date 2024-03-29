import LineChart from "components/Chart/LineChart";
import CustomDropDown from "components/DropDown/DropDown";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { finServicesAndMessagingTransactionlineChartData } from "mock-data/ChartsData";
import { systemSettingLineChartData } from "mock-data/ChartsData";
import { FinServicingAndMessagingHeading } from "mock-data/Data";
import { weekData } from "mock-data/Data";
import { yearData } from "mock-data/Data";
import { monthData } from "mock-data/Data";
import { finServicingAndMessagingData } from "mock-data/Data";
import React from "react";
import { Col, Row } from "reactstrap";
const FinServiceAndMessage = () => {
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
              component="FinServiceAndMessagingTransactionCrypto"
              height="323"
            />
          </div>
        </Col>
        <Col xl={5}>
          <div
            className="line-chart-wrapper ml-lg-2 mrl-lg-2 p-3"
            style={{ border: "1px solid #8FE40F" }}
          >
            <div className="d-flex align-items-center justify-content-between m-1">
              <div className="d-flex align-items-center">
                <h1 className="charts-crypto-heading mb-0 mr-2">
                  Transactions
                </h1>
                <CustomDropDown
                  heading="Week"
                  items={weekData}
                  className="country-drop-down"
                  type="img"
                  imageClassName="country-drop-img"
                />
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
            <div className="fin-chart-wrapper mt-3">
              <LineChart
                chartData={finServicesAndMessagingTransactionlineChartData}
                component="FinServiceAndMessagingTransaction"
                height="300"
              />
            </div>
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
