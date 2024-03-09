import DynamicTable from "components/DynamicTable/DynamicTable";
import DynamicBalanceSheetTable from "components/DynamicTable/StrippedTable";
import TopBar from "components/Users/TopBar";
import { finServicesBalanceSheetData } from "mock-data/Data";
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
          component="Ledger"
          parentComponent="FinServicesAndMessaging"
        />
        <div className="mt-3">
          {LedgerListing === "All Categories" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="Ledger"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {LedgerListing === "Debits" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="LLedger"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {LedgerListing === "Credits" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableDataCredit}
              component="Ledger"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {LedgerListing === "Withdrawals" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="Ledger"
              parentComponent="FinServicesAndMessaging"
            />
          )}

          {LedgerListing === "Deposits" && (
            <DynamicTable
              headings={ledgerTableHeading}
              tableData={ledgerTableTableData}
              component="Ledger"
              parentComponent="FinServicingAndMessaging"
            />
          )}
          {LedgerListing === "Balance Sheet" && (
            <DynamicBalanceSheetTable data={finServicesBalanceSheetData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LedgerListing;
