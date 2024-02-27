import React, { useState } from "react";
import "../User.css";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "../TopBar";
import { taxPreparersHeadings } from "mock-data/ToBarData";
import { networkTaxHeadings } from "mock-data/Data";
import { networkTaxData } from "mock-data/Data";
import { representativeHeadings } from "mock-data/Data";
import { representativeData } from "mock-data/Data";

const TaxPreparersListing = () => {
  const [activeRepresentative, setActiveRepresentative] = useState();
  const handleActiveRepresentative = (val) => {
    setActiveRepresentative(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={taxPreparersHeadings}
          buttonValue="Representative"
          checkActiveLink={handleActiveRepresentative}
          defaultValue="Network of Certified Tax Preparer/ CAF"
        />
        <div className="mt-3">
          {activeRepresentative === "Network of Certified Tax Preparer/ CAF" && (
            <DynamicTable
              headings={networkTaxHeadings}
              tableData={networkTaxData}
              component="taxPreparers" 
            />
          )}
          {activeRepresentative === "Tax Representative" && (
            <DynamicTable headings={representativeHeadings} tableData={representativeData} component="taxPreparers" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaxPreparersListing;
