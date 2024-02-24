import React, { useState } from "react";
import "./User.css";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "./TopBar";
import { VendorHeadings } from "mock-data/ToBarData";
import { vendorsHeadings } from "mock-data/Data";
import { vendorsData } from "mock-data/Data";
import { contractorsHeadings } from "mock-data/Data";
import { contractorsData } from "mock-data/Data";

const VendorsListing = () => {
  const [activeVendors, setActiveVendors] = useState();
  const handleActiveVendors = (val) => {
    setActiveVendors(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={VendorHeadings}
          buttonValue="Vendor"
          checkActiveLink={handleActiveVendors}
          defaultValue="Vendors"
        />
        <div className="mt-3">
        {
          activeVendors==="Vendors"&&
          <DynamicTable
            headings={vendorsHeadings}
            tableData={vendorsData}
          />
        }
        {
          activeVendors==="Contractors"&&
          <DynamicTable
            headings={contractorsHeadings}
            tableData={contractorsData}
          />
        }
        </div>
      </div>
    </div>
  );
};

export default VendorsListing;
