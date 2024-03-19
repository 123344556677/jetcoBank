import BarChart from "components/Chart/BarChart";
import LineChart from "components/Chart/LineChart";
import CircularProgress from "components/CircularBar/CircularBar";
import { WealthManagementLineChartData } from "mock-data/ChartsData";
import { businessAndTaxColors } from "mock-data/CircularProgressData";
import { businessAndTaxPercentages } from "mock-data/CircularProgressData";
import React from "react";
import { Button, Card, Col, Row } from "reactstrap";
import "../BusinessAndTaxServices.css";
import CustomDropDown from "components/DropDown/DropDown";
import { weekData } from "mock-data/Data";
import { monthData } from "mock-data/Data";
import { yearData } from "mock-data/Data";

const WealthManagement = () => {
  return (
    <div className="">
      <Row className="w-100">
        <Col xl={12} className="ml-2">
          <div className="bar-chart-wrapper p-3">
            <BarChart component="WealthAndManagement" />
          </div>
        </Col>
      </Row>
      <Row className="w-100">
        <Col className="mt-3" xl={4}>
          <Card className="wealth-mangement-card ml-2 p-4  mb-3">
            <Button className="btn wealth-portfolio-button">
              Portfolio Disribution
            </Button>
            <CircularProgress
              percentages={businessAndTaxPercentages}
              colors={businessAndTaxColors}
              height="150"
              width="150"
            />
            <h2 className="ml-3" style={{ marginTop: "50px" }}>
              60%{" "}
              <span>
                <div
                  className="small-circle ml-2"
                  style={{ backgroundColor: "#91DF46" }}
                ></div>
                <span className="small-circle-title ml-2">
                  Cash and Equivalents
                </span>
              </span>
            </h2>

            <h2 className="mt-3 ml-3">
              25%{" "}
              <span>
                <div
                  className="small-circle ml-2"
                  style={{ backgroundColor: "#76C924" }}
                ></div>
                <span className="small-circle-title ml-2">
                  Loans And Advances
                </span>
              </span>
            </h2>
            <h2 className="mt-3 ml-3">
              15%{" "}
              <span>
                <div
                  className="small-circle ml-2"
                  style={{ backgroundColor: "#5AB303" }}
                ></div>
                <span className="small-circle-title ml-2">Investments</span>
              </span>
            </h2>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col xl={8} className="mt-3">
          <Card className="line-chart-wealth-wrapper  p-4">
            <div className="d-flex align-items-center justify-content-between m-2">
              <Button className="btn wealth-performance-button">
                Performance Analysis
              </Button>
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
              chartData={WealthManagementLineChartData}
              component="WealthAndManagement"
              height="330"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WealthManagement;
