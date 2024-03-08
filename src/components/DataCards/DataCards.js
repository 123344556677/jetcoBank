import { renderSplitText } from "components/Common";
import React from "react";
import { Card } from "reactstrap";

const DataCards = ({ cardVal, component }) => {
  return (
    <div className="card-container">
      {cardVal?.map((data, index) => (
        <Card
          className={
            (component === "mailbox"||component === "brokerageInvestments")
              ? "mailbox-user-card ml-3 mb-3"
              : "user-card ml-3 mb-3"
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
                ? "mailbox-user-card ml-3 mb-3"
                : "user-card ml-3 mb-3"
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
    </div>
  );
};

export default DataCards;
