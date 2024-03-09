import DynamicTable from "components/DynamicTable/DynamicTable";
import { deedsData } from "mock-data/Data";
import { deedsHeading } from "mock-data/Data";
import React from "react";

function Deeds() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Deeds Processed <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={deedsHeading}
        tableData={deedsData}
        component="Deeds"
      />
    </>
  );
}

export default Deeds;
