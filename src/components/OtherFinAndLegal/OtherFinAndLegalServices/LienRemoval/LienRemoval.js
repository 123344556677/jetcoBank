import DynamicTable from "components/DynamicTable/DynamicTable";
import { lienRemovalData } from "mock-data/Data";
import { lienRemovalHeading } from "mock-data/Data";
import React from "react";
function LienRemoval() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Lien Removal Requests{" "}
          <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={lienRemovalHeading}
        tableData={lienRemovalData}
        component="Lien Removal"
      />
    </>
  );
}

export default LienRemoval;
