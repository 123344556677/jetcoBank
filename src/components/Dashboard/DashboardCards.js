import React from "react";
import { Button, Card, Col, Progress, Row } from "reactstrap";
import "./Dashboard.css";
import Rating from "components/Rating/Rating";
import CustomDropDown from "components/DropDown/DropDown";
import { weekData } from "mock-data/Data";

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
                style={{ color: "#808080", fontSize: "13px" }}
              >
                {data?.title}
              </span>
              <h2 className="mb-0">{data?.amount}</h2>
              <div>
                {data?.increaseIcon && (
                  <img
                    src={data?.increaseIcon}
                    className="polygon-img"
                    alt="increase"
                  />
                )}
                <span
                  className="percent ml-1"
                  style={{ fontSize: "12px", fontWeight: "700" }}
                >
                  {data?.percent}
                </span>
                <span
                  className="ml-1 card-heading"
                  style={{ color: "#808080", fontSize: "13px" }}
                >
                  {data?.duration}
                </span>
              </div>
            </div>
          </div>
          <img src={data?.chartIcon} className="mt-3" alt="chart" />
        </Card>
      ))}
      <Card className="dashboard-card-user-one ml-4 mr-2 mb-3">
      <div className="d-flex m-4 justify-content-between">
        <h3 className="pages-heading">Customer Review</h3>
        <CustomDropDown heading="This month" items={weekData} className="dashboard-drop-down" />
        </div>
        <Row className="mb-3">
          <Col>
            <h2 className="dashboard-card-user-one-rating mt-2 ml-4 mb-0">
              4.8 <span className="dashboard-card-rating-out-off"> /05</span>
            </h2>
            <Rating totalStars={5} />
            <span className="total-votes ml-4 mt-2">(69,575 users)</span>
          </Col>
          <Col className="border-left  mr-4 pl-4">
            <Progress max="5" value="4" /> <br />
            <Progress max="5" value="3" /> <br />
            <Progress max="5" value="2" /> <br />
            <Progress max="5" value="1" /> <br />
          </Col>
        </Row>
        <Button className="rating-button ml-4 mb-3 p-2" size="sm">
          {" "}
          See all customer view
        </Button>
      </Card>
    </div>
  );
};

export default DashboardCards;
