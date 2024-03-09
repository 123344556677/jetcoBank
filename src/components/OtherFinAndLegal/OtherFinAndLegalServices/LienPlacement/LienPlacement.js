import DynamicTable from "components/DynamicTable/DynamicTable";
import { lienPlacementData } from "mock-data/Data";
import { lienPlacementHeading } from "mock-data/Data";
import React from "react";

function LienPlacement() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Active Lien Placements{" "}
          <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={lienPlacementHeading}
        tableData={lienPlacementData}
        component="Lien Placement"
      />
    </>
  );
}

export default LienPlacement;
