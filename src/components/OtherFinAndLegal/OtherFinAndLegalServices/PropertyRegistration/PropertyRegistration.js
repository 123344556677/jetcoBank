import DynamicTable from "components/DynamicTable/DynamicTable";
import { propertyRegistrationHeading } from "mock-data/Data";
import { propertyRegistrationData } from "mock-data/Data";
import React from "react";

function PropertyRegistration() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Property Registrations{" "}
          <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={propertyRegistrationHeading}
        tableData={propertyRegistrationData}
        component="Passport Services"
      />
    </>
  );
}

export default PropertyRegistration;
