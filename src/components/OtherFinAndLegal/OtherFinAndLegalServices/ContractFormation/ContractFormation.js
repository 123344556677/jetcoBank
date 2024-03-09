import DynamicTable from "components/DynamicTable/DynamicTable";
import { contractFormationHeading } from "mock-data/Data";
import { contractFormationData } from "mock-data/Data";
import React from "react";
function ContractFormation() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Contract Created{" "}
          <span className="total-transactions">(15)</span>
        </h3>
      </div>
      <DynamicTable
        headings={contractFormationHeading}
        tableData={contractFormationData}
        component="Contract Formation"
      />
    </>
  );
}

export default ContractFormation;
