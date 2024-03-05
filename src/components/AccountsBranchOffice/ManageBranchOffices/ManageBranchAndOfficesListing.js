import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { standardBranchData } from "mock-data/Data";
import { standardBranchHeadings } from "mock-data/Data";
import { manageBranchesOfficesHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";

const ManageBranchAndOfficesListing = () => {
  const [activeBranch, setActiveBranch] = useState();
  const handleActiveBranch = (val) => {
    setActiveBranch(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={manageBranchesOfficesHeadings}
          checkActiveLink={handleActiveBranch}
          defaultValue="Standard Branch"
        />
        <div className="mt-3">
          {activeBranch === "Standard Branch" && (
            <DynamicTable
              headings={standardBranchHeadings}
              tableData={standardBranchData}
              component="manageBranchAndOffices"
            />
          )}
          {activeBranch === "Custom Branch" && (
            <DynamicTable
              headings={standardBranchHeadings}
              tableData={standardBranchData}
              component="manageBranchAndOffices"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageBranchAndOfficesListing;
