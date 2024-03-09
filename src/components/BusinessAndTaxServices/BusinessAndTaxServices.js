import DataCards from "components/DataCards/DataCards";
import PreviousMessages from "components/Inbox/PreviousMessages";
import { businessAndTaxServicesCardData } from "mock-data/Data";
import { customerFeedback } from "mock-data/Data";
import React from "react";

const BusinessAndTaxServices = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <DataCards
        cardVal={businessAndTaxServicesCardData}
        component="Business and Tax Services"
      />

      <div className="main-div mr-lg-3 ml-lg-3">
        <PreviousMessages
          messagesData={customerFeedback}
          component="Customer Feedback"
        />
      </div>
    </div>
  );
};

export default BusinessAndTaxServices;
