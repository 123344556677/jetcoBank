import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { ledgerTableTableData } from "mock-data/Data";
import { ledgerTableTableDataCredit } from "mock-data/Data";
import { ledgerTableHeading } from "mock-data/Data";
import { ledgerListingHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";
function LedgerListing() {
  const [LedgerListing, setLedgerListing] = useState();
  const handleActiveLedgerListing = (val) => {
    setLedgerListing(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={ledgerListingHeadings}
          buttonValue="Create Ledger"
          checkActiveLink={handleActiveLedgerListing}
          defaultValue="All Categories"
          parentComponent="Ledger"
        />
        <div className="mt-3">
          {LedgerListing === "All Categories" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="Ledger"
              parentComponent="Ledger"
            />
          )}
          {LedgerListing === "Debits" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="FinanicalMessagingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {LedgerListing === "Credits" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableDataCredit}
              component="FinanicalMessagingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {LedgerListing === "Withdrawals" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="FinanicalMessagingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}

          {LedgerListing === "Deposits" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="FinanicalMessagingListing"
              parentComponent="FinServicingAndMessaging"
            />
          )}
          {LedgerListing === "Balance Sheet" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="FinanicalMessagingListing"
              parentComponent="FinServicingAndMessaging"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LedgerListing;
