import React from "react";
import "./CustomHeaderCard.css";
import { Card } from "reactstrap";

const CustomHeaderCards = ({ cardValues,component }) => {
  return (
    <div className="card-container mt-3">
      {cardValues?.map((data, index) => (
        <Card className="header-card mb-2 ml-lg-2" key={index}>
          <div className="header-content mt-4 mb-4">
            <div className="ml-2">
              <span className="card-heading">{data?.title}</span>
              <h1>{data?.amount}</h1>
              {
                component!=="Courier and Order"&&
              <div>
                <img
                  src={require("../../assets/img/icons/common/Polygon-up.png")}
                  className="polygon-img"
                  alt="increase"
                />
                <span className="percent ml-1">{data?.percent}</span>
                <span className="ml-1 card-heading">{data?.duration}</span>
              </div>
              }
            </div>
            <img src={data?.icon} className="card-image ml-5" alt="finance" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CustomHeaderCards;
