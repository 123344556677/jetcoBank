import React from "react";
import "../BusinessAndTaxServices.css";
import { Card, Col, Row } from "reactstrap";
import { LogoDesignCards } from "mock-data/Data";
const LogoDesign = () => {
  return (
    <div>
      <Row className="w-100 ml-lg-1 mr-lg-3 mt-5">
        {LogoDesignCards?.map((data, index) => (
          <Col xl={4} key={index}>
            <Card className="logo-design-card-one p-4">
              <div className="text-center">
                <h2 className="text-center  logo-design-card-heading">
                  {data?.heading}
                </h2>
                <img
                  src={data?.img}
                  alt="brand"
                  className={
                    data?.heading === "Brand Identity"
                      ? "logo-design-card-img mt-3 mb-3"
                      : data?.heading === "Marketing"
                      ? "logo-design-card-img-jetco mt-4"
                      : "mt-2 mb-3"
                  }
                />
              </div>
            </Card>
            <Card className="logo-design-card-two p-4">
              <div className="text-center">
                <p className="logo-design-card-text">
                  {data.text.split(" ").map((word, index) => (
                    <span
                      key={index}
                      style={{
                        color:
                          word === "JETCO" || word === "JETCO bank"
                            ? "#91DF46"
                            : "inherit",
                      }}
                    >
                      {word}{" "}
                    </span>
                  ))}
                </p>
              </div>
            </Card>
            <div
              className="text-center p-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="user-image mr-3"
                style={{
                  backgroundColor: "#CAE9AC",
                  boxShadow: "2px 2px 4px 2px rgba(50, 49, 49, 0.05)",
                }}
              >
                <img
                  src={require("../../../assets/img/icons/common/Edit.png")}
                  alt="edit-icon"
                />
              </div>
              <div
                className="user-image mr-3"
                style={{
                  backgroundColor: "#E6C991",
                  boxShadow: "2px 2px 4px 2px rgba(50, 49, 49, 0.05)",
                }}
              >
                <img
                  src={require("../../../assets/img/icons/common/Iconly-Bold-Swap.png")}
                  alt="swap-icon"
                />
              </div>
              <div
                className="user-image mr-3"
                style={{
                  backgroundColor: "#E4A7AD",
                  boxShadow: "2px 2px 4px 2px rgba(50, 49, 49, 0.05)",
                }}
              >
                <img
                  src={require("../../../assets/img/icons/common/Delete.png")}
                  alt="delete-icon"
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LogoDesign;
