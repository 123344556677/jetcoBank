import DynamicTable from "components/DynamicTable/DynamicTable";
import { corporateCollectionsData } from "mock-data/Data";
import { corporateCollectionsHeading } from "mock-data/Data";
import React from "react";

function CorporateCollections() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Corporate Collections{" "}
          <span className="total-transactions">($530,000)</span>
        </h3>
      </div>
      <DynamicTable
        headings={corporateCollectionsHeading}
        tableData={corporateCollectionsData}
        component="Corporate Collections"
      />
    </>
  );
}

export default CorporateCollections;
