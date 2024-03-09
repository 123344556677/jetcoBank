import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { withdrawalsListingHeadingsTableData } from "mock-data/Data";
import { withdrawalsListingHeadingsTable } from "mock-data/Data";
import { withdrawalsListingHeadings } from "mock-data/ToBarData";

import React, { useState } from "react";
function WithdrawalsListing() {
  const [WithdrawalsListing, setWithdrawalsListing] = useState();
  const handleActiveWithdrawalsListing = (val) => {
    setWithdrawalsListing(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={withdrawalsListingHeadings}
          buttonValue="Withdrawal Method"
          checkActiveLink={handleActiveWithdrawalsListing}
          defaultValue="Pending"
          parentComponent="FinServicesAndMessaging"
        />
        <div className="mt-3">
          {WithdrawalsListing === "Pending" && (
            <DynamicTable
              headings={withdrawalsListingHeadingsTable}
              tableData={withdrawalsListingHeadingsTableData}
              component="WithdrawalsListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {WithdrawalsListing === "Approve" && (
            <DynamicTable
              headings={withdrawalsListingHeadingsTable}
              tableData={withdrawalsListingHeadingsTableData}
              component="WithdrawalsListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {WithdrawalsListing === "Rejected" && (
            <DynamicTable
              headings={withdrawalsListingHeadingsTable}
              tableData={withdrawalsListingHeadingsTableData}
              component="WithdrawalsListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default WithdrawalsListing;
