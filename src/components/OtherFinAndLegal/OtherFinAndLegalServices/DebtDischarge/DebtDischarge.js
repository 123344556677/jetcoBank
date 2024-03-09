import DynamicTable from "components/DynamicTable/DynamicTable";
import { debtDischargeData } from "mock-data/Data";
import { debtDischargeHeading } from "mock-data/Data";
import React from "react";

function DebtDischarge() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Debt Discharge Cases{" "}
          <span className="total-transactions">(15)</span>
        </h3>
      </div>
      <DynamicTable
        headings={debtDischargeHeading}
        tableData={debtDischargeData}
        component="Debt Discharge"
      />
    </>
  );
}

export default DebtDischarge;
