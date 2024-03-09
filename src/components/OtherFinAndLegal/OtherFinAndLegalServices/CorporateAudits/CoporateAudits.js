import DynamicTable from "components/DynamicTable/DynamicTable";
import { corporateAuditsHeading } from "mock-data/Data";
import { corporateAuditsData } from "mock-data/Data";
import React from "react";

function CoporateAudits() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Corporate Audits{" "}
          <span className="total-transactions">(60)</span>
        </h3>
      </div>
      <DynamicTable
        headings={corporateAuditsHeading}
        tableData={corporateAuditsData}
        component="Corporate Audits"
      />
    </>
  );
}

export default CoporateAudits;
