import DynamicTable from "components/DynamicTable/DynamicTable";
import { FinServicingAndMessagingHeading } from "mock-data/Data";
import { finServicingAndMessagingData } from "mock-data/Data";
import React from "react";
const FinServiceAndMessage = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <div className="d-flex justify-content-between align-items-center mr-lg-3">
          <h3 className="m-4 pages-heading">Recent Transaction Activity</h3>
        </div>
        <DynamicTable
          headings={FinServicingAndMessagingHeading}
          tableData={finServicingAndMessagingData}
          component="FinServicesAndMessaging"
          parentComponent="FinServicesAndMessaging"
        />
      </div>
    </div>
  );
};

export default FinServiceAndMessage;
