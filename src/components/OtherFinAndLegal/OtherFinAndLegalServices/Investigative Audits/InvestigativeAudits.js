import React from "react";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { investigativeAuditsHeading } from "mock-data/Data";
import { investigativeAuditsData } from "mock-data/Data";

function InvestigativeAudits() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Investigative Audits{" "}
          <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={investigativeAuditsHeading}
        tableData={investigativeAuditsData}
        component="Investigative Audits"
      />
    </>
  );
}

export default InvestigativeAudits;
