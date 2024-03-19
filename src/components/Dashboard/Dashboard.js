import React from "react";
import { Card, Col, Row } from "reactstrap";
import "./Dashboard.css";
import LineChart from "components/Chart/LineChart";
import { lineChartData } from "mock-data/ChartsData";
import DashboardCards from "./DashboardCards";
import { dashboardCardData } from "mock-data/Data";
import CircularProgress from "components/CircularBar/CircularBar";
import { businessAndTaxPercentages } from "mock-data/CircularProgressData";
import { businessAndTaxColors } from "mock-data/CircularProgressData";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { dashboardHeadings } from "mock-data/Data";
import { dashboardData } from "mock-data/Data";
const Dashboard = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <DashboardCards cardData={dashboardCardData} />{" "}
      <div className="card-container dashboard-chart-card-wrapper">
        <div
          className="line-chart-wrapper ml-sm-4 ml-lg-5 p-3"
          style={{
            width: "820px",
          }}
        >
          <div className="d-flex align-items-center justify-content-between m-2">
            <h1 className="charts-transaction-heading">Transaction</h1>
            <div className="d-flex mr-lg-3">
              <span>
                <div
                  className="small-circle"
                  style={{ backgroundColor: "#5AB303" }}
                ></div>
                <span className="small-circle-title ml-2">Last Week</span>
              </span>
              <span>
                <div
                  className="small-circle ml-lg-4"
                  style={{ backgroundColor: "#91DF46" }}
                ></div>
                <span className="small-circle-title ml-2">This Week</span>
              </span>
            </div>
          </div>
          <LineChart chartData={lineChartData} component="Dashboard"  />
        </div>{" "}
        <Card
          className="dashboard-card-user ml-4  mb-3"
          style={{
            marginTop: "10%",
          }}
        >
          <h3 className="m-4 pages-heading"> Traffic Sources </h3>{" "}
          <Row className="mb-3">
            <Col className="ml-4">
              <CircularProgress
                percentages={businessAndTaxPercentages}
                colors={businessAndTaxColors}
                height="150"
                width="150"
              />
            </Col>{" "}
            <Col className="mr-2 pl-4">
              <h2 className="mt-1 mb-0">60% </h2>{" "}
              <span>
                <div
                  className="small-circle"
                  style={{
                    backgroundColor: "#91DF46",
                  }}
                ></div>{" "}
                <span className="small-circle-title ml-1"> Organic </span>{" "}
              </span>
              <h2 className="mt-2 mb-0">25% </h2>{" "}
              <span>
                <div
                  className="small-circle "
                  style={{
                    backgroundColor: "#76C924",
                  }}
                ></div>{" "}
                <span className="small-circle-title ml-1"> Direct </span>{" "}
              </span>{" "}
              <h2 className="mt-2 mb-0">15% </h2>{" "}
              <span>
                <div
                  className="small-circle"
                  style={{
                    backgroundColor: "#5AB303",
                  }}
                ></div>{" "}
                <span className="small-circle-title ml-1"> Social Media </span>{" "}
              </span>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="main-div ml-sm-4 ml-lg-5 mt-3 mr-3">
        <div className="d-flex justify-content-between align-items-center mr-lg-3">
          <h3 className="m-4 pages-heading">Courier and Dispatch Services </h3>
        </div>
        <DynamicTable
          headings={dashboardHeadings}
          tableData={dashboardData}
          component="Dashboard"
          parentComponent="Dashboard"
        />
      </div>
    </div>
  );
};

export default Dashboard;
