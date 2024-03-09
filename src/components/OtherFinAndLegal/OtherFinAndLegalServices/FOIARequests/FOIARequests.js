import DynamicTable from "components/DynamicTable/DynamicTable";
import { foiaRequestsHeading } from "mock-data/Data";
import { foiaRequestsData } from "mock-data/Data";
import React from "react";
function FOIARequests() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total FOIA Requests Submitted{" "}
          <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={foiaRequestsHeading}
        tableData={foiaRequestsData}
        component="FOIA Requests"
      />
    </>
  );
}

export default FOIARequests;
