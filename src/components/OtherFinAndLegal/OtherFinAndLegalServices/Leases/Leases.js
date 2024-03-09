import DynamicTable from "components/DynamicTable/DynamicTable";
import { leasesData } from "mock-data/Data";
import { leasesHeading } from "mock-data/Data";
import React from "react";

function Leases() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Active Leases <span className="total-transactions">(60)</span>
        </h3>
      </div>
      <DynamicTable
        headings={leasesHeading}
        tableData={leasesData}
        component="Leases"
      />
    </>
  );
}

export default Leases;
