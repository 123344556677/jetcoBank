import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { finanicalMessagingHeadingsTableSWFT } from "mock-data/Data";
import { finanicalMessagingHeadingsTableISO } from "mock-data/Data";
import { finanicalMessagingHeadingsTableACH } from "mock-data/Data";
import { finanicalMessagingHeadingsTableFINCEN } from "mock-data/Data";
import { finanicalMessagingHeadingsTableOther } from "mock-data/Data";
import { finanicalMessagingHeadingsTableDataOther } from "mock-data/Data";
import { finanicalMessagingHeadingsTableDataACH } from "mock-data/Data";
import { finanicalMessagingHeadingsTableDataISO } from "mock-data/Data";
import { finanicalMessagingHeadingsTableDataSWFT } from "mock-data/Data";
import { finanicalMessagingHeadingsTableData } from "mock-data/Data";
import { finanicalMessagingHeadingsTable } from "mock-data/Data";
import { finanicalMessagingHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";
function FinancialMessagingListing() {
  const [FinanicalMessagingListing, setFinanicalMessagingListing] = useState();
  const handleActiveFinanicalMessagingListing = (val) => {
    setFinanicalMessagingListing(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={finanicalMessagingHeadings}
          buttonValue="Message"
          checkActiveLink={handleActiveFinanicalMessagingListing}
          defaultValue="All Messages"
          component="financialMessaging"
          parentComponent="FinServicesAndMessaging"
        />
        <div className="mt-3">
          {FinanicalMessagingListing === "All Messages" && (
            <DynamicTable
              headings={finanicalMessagingHeadingsTable}
              tableData={finanicalMessagingHeadingsTableData}
              component="FinanicalMessagingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {FinanicalMessagingListing === "SWFT" && (
            <DynamicTable
              headings={finanicalMessagingHeadingsTableSWFT}
              tableData={finanicalMessagingHeadingsTableDataSWFT}
              component="FinanicalMessagingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {FinanicalMessagingListing === "ISO 20022" && (
            <DynamicTable
              headings={finanicalMessagingHeadingsTableISO}
              tableData={finanicalMessagingHeadingsTableDataISO}
              component="FinanicalMessagingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {FinanicalMessagingListing === "ACH" && (
            <DynamicTable
              headings={finanicalMessagingHeadingsTableACH}
              tableData={finanicalMessagingHeadingsTableDataACH}
              component="FinanicalMessagingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {FinanicalMessagingListing === "FINCEN" && (
            <DynamicTable
              headings={finanicalMessagingHeadingsTableFINCEN}
              tableData={finanicalMessagingHeadingsTableDataACH}
              component="FinanicalMessagingListingFINCEN"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {FinanicalMessagingListing === "Other Messages" && (
            <DynamicTable
              headings={finanicalMessagingHeadingsTableOther}
              tableData={finanicalMessagingHeadingsTableDataOther}
              component="FinanicalMessagingListing"
              parentComponent="FinServicingAndMessaging"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FinancialMessagingListing;
