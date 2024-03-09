import DynamicTable from "components/DynamicTable/DynamicTable";
import { passportServicesHeading } from "mock-data/Data";
import { passportServicesData } from "mock-data/Data";
import React from "react";
function PassportServices() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Passport Applications Processed{" "}
          <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={passportServicesHeading}
        tableData={passportServicesData}
        component="Passport Services"
      />
    </>
  );
}

export default PassportServices;
