import CircularProgress from "components/CircularBar/CircularBar";
import { renderSplitText } from "components/Common";
import { businessAndTaxColors } from "mock-data/CircularProgressData";
import { businessAndTaxPercentages } from "mock-data/CircularProgressData";
import React from "react";
import { Card } from "reactstrap";

const DataCards = ({ cardVal, component }) => {
  return (
    <div className="card-container">
      {cardVal?.map((data, index) => (
        <Card
          className={
            component === "mailbox" || component === "brokerageInvestments"
              ? "mailbox-user-card ml-lg-3 mb-3"
              : component === "Business and Tax Services"
              ? "user-card ml-lg-5 mb-3"
              : "user-card ml-lg-3 mb-3"
          }
          key={index}
        >
          <h7 className="text-center user-card-title ">
            {renderSplitText(data?.title)}
          </h7>
          <h1 className="text-center user-card-text  mt-2">{data?.price}</h1>
        </Card>
      ))}
      {component === "brokerageInvestments" && (
        <>
          <Card
            className={
              component === "brokerageInvestments"
                ? "mailbox-user-card ml-lg-3 mb-3"
                : "user-card ml-lg-3 mb-3"
            }
          >
            <h7 className="text-center user-card-title">
              {renderSplitText("Diversification")}
            </h7>
            <div className="mt-2" style={{ display: "flex" }}>
              <h7>
                Stocks{" "}
                <span className="user-card-text" style={{ fontWeight: "600" }}>
                  60%
                </span>
              </h7>
              <h7 className="ml-3">
                Estate{" "}
                <span className="user-card-text" style={{ fontWeight: "600" }}>
                  25%
                </span>
              </h7>
            </div>
            <div className="mt-2" style={{ display: "flex" }}>
              <h7>
                Bonds{" "}
                <span className="user-card-text" style={{ fontWeight: "600" }}>
                  40%
                </span>
              </h7>
              <h7 className="ml-3">
                Funds{" "}
                <span className="user-card-text" style={{ fontWeight: "600" }}>
                  10%
                </span>
              </h7>
            </div>
          </Card>
          <Card
            className={
              component === "brokerageInvestments"
                ? "mailbox-user-card ml-3 mb-3"
                : "user-card ml-3 mb-3"
            }
          >
            <h7 className="text-center user-card-title">
              {renderSplitText("Performance Highlights")}
            </h7>

            <h7 className="user-card-text mt-2" style={{ fontWeight: "600" }}>
              15%{" "}
              <span
                style={{ fontSize: "13px", color: "#000000", fontWeight: 500 }}
              >
                Increase In Stocks
              </span>
            </h7>
            <h7 className="user-card-text" style={{ fontWeight: "600" }}>
              8%{" "}
              <span
                style={{ fontSize: "13px", color: "#000000", fontWeight: 500 }}
                className="ml-2"
              >
                Rise In Real Estate
              </span>
            </h7>
          </Card>
        </>
      )}
      {component === "Business and Tax Services" && (
        <Card className="user-card ml-lg-5 mb-3" style={{ width: "480px" }}>
          <h7 className="user-card-title ">Website Traffic</h7>
          <div style={{ display: "flex" }} className="mt-2">
            <CircularProgress
              percentages={businessAndTaxPercentages}
              colors={businessAndTaxColors}
              height="70"
              width="70"
            />
            <h3 className="mt-4 ml-3">
              60%{" "}
              <span>
                <div
                  className="small-circle ml-2"
                  style={{ backgroundColor: "#91DF46" }}
                ></div>
                <span className="small-circle-title ml-2">Users</span>
              </span>
            </h3>

            <h3 className="mt-4 ml-3">
              25%{" "}
              <span>
                <div
                  className="small-circle ml-2"
                  style={{ backgroundColor: "#76C924" }}
                ></div>
                <span className="small-circle-title ml-2">Agents</span>
              </span>
            </h3>
            <h3 className="mt-4 ml-3">
              15%{" "}
              <span>
                <div
                  className="small-circle ml-2"
                  style={{ backgroundColor: "#5AB303" }}
                ></div>
                <span className="small-circle-title ml-2">Non Users</span>
              </span>
            </h3>
          </div>
        </Card>
      )}
    </div>
  );
};

export default DataCards;
