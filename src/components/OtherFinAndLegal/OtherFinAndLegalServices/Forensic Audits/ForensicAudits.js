import DynamicTable from "components/DynamicTable/DynamicTable";
import { forensicAuditsData } from "mock-data/Data";
import { forensicAuditsHeading } from "mock-data/Data";
import React from "react";

function ForensicAudits() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Forensic Audits <span className="total-transactions">(80)</span>
        </h3>
      </div>
      <DynamicTable
        headings={forensicAuditsHeading}
        tableData={forensicAuditsData}
        component="Forensic Audits"
      />
    </>
  );
}

export default ForensicAudits;
