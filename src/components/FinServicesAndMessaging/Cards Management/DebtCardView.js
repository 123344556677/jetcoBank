import React from "react";
import "../FinServicesAndMessages.css";

const DebtCardView = () => {
  return (
    <div className="ml-lg-4">
      <h3 className="debt-card-title">Cards Management</h3>
      <div className="card-container mt-2">
        <img
          src={require("../../../assets/img/icons/common/Group 68052.png")}
          alt="Debt"
          className="debt-cards mt-1"
        />

        <img
          src={require("../../../assets/img/icons/common/Group 68489.png")}
          alt="Debt"
          className="debt-cards-2 ml-lg-2 mt-1"
        />

        <img
          src={require("../../../assets/img/icons/common/Group 68500.png")}
          alt="Debt"
          className="debt-cards-2 ml-lg-2 mt-1"
        />
        <img
          src={require("../../../assets/img/icons/common/Group 68502.png")}
          alt="Debt"
          className="debt-cards-2 ml-lg-2 mt-1"
        />
      </div>
      <br />
    </div>
  );
};

export default DebtCardView;
