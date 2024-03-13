import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { contractorSettingsHeadings } from "mock-data/Data";
import { vendorSettingsHeadings } from "mock-data/Data";
import { vendorSettingsData } from "mock-data/Data";
import { contractorSettingsData } from "mock-data/Data";
import { VendorHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";

const VendorsAndContractors = () => {
  const [activeVendors, setActiveVendors] = useState();
  const handleActiveVendors = (val) => {
    setActiveVendors(val);
  };
  return (
    <>
      <TopBar
        headings={VendorHeadings}
        buttonValue="no-button"
        checkActiveLink={handleActiveVendors}
        defaultValue="Vendors"
      />
      <div className="mt-3">
        {activeVendors === "Vendors" && (
          <DynamicTable
            headings={vendorSettingsHeadings}
            tableData={vendorSettingsData}
            component="Vendor"
            parentComponent="SystemAndSettings"
          />
        )}
        {activeVendors === "Contractors" && (
          <DynamicTable
            headings={contractorSettingsHeadings}
            tableData={contractorSettingsData}
            component="Contractor"
            parentComponent="SystemAndSettings"
          />
        )}
      </div>
    </>
  );
};

export default VendorsAndContractors;
