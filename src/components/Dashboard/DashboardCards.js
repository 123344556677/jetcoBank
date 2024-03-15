import React from "react";
import { Card } from "reactstrap";
import "./Dashboard.css";

const DashboardCards = ({ cardData }) => {
  return (
    <div className="card-container">
      {cardData?.map((data) => (
        <Card className="dashboard-card ml-5">
          <div className="dashboard-card-icon-wrapper position-absolute ">
            <img src={data?.icon} className="" alt="user" />
          </div>
          <div className="header-content ml-2">
            <div className="ml-2">
              <span
                className="card-heading text-center"
                style={{ color: "#808080",fontSize:"13px" }}
              >
                {data?.title}
              </span>
              <h2 className="mb-0">{data?.amount}</h2>
              <div>
                <img
                  src={require("../../assets/img/icons/common/Polygon-up.png")}
                  className="polygon-img"
                  alt="increase"
                />
                <span className="percent ml-1">{data?.percent}</span>
                <span
                  className="ml-1 card-heading"
                  style={{ color: "#808080",fontSize:"13px" }}
                >
                  {data?.duration}
                </span>
              </div>
            </div>
          </div>
          <img
            src={require("../../assets/img/icons/common/line-chart.png")}
            className="mt-3"
            alt="chart"
          />
        </Card>
      ))}
      <Card className="dashboard-card-user-one ml-4 mr-2 mb-3">hannan</Card>
    </div>
  );
};

export default DashboardCards;
