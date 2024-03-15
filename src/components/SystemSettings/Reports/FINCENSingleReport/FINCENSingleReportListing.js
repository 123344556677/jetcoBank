import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { fincenXMEReportHeadings } from "mock-data/Data";
import { fincenSingleReportListingHeadings } from "mock-data/Data";
import { fincenSingleReportListingData } from "mock-data/Data";
import { fincenXMEReportData } from "mock-data/Data";
import { fincenBatchReportData } from "mock-data/Data";
import { fincenBatchReportHeadings } from "mock-data/Data";
import { fincenSingleReportListingTopHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";

function FINCENSingleReportListing() {
  const [FINCENSingleReportListing, setFINCENSingleReportListing] = useState();

  const handleActiveFINCENSingleReportListing = (val) => {
    setFINCENSingleReportListing(val);
  };

  return (
    <>
      <TopBar
        headings={fincenSingleReportListingTopHeadings}
        buttonValue={FINCENSingleReportListing === "FinCEN Single Report"?"Generate FinCEN Single Report":FINCENSingleReportListing === "FinCEN Batch Report"?"Generate FinCEN Batch Report":"Generate FinCEN XME Report" }
        checkActiveLink={handleActiveFINCENSingleReportListing}
        defaultValue="FinCEN Single Report"
      />
      {FINCENSingleReportListing === "FinCEN Single Report" && (
        <DynamicTable
          headings={fincenSingleReportListingHeadings}
          tableData={fincenSingleReportListingData}
          component="FINCENSingleReportListing"
          parentComponent="SystemSettings"
        />
      )}
      {FINCENSingleReportListing === "FinCEN Batch Report" && (
        <DynamicTable
          headings={fincenBatchReportHeadings}
          tableData={fincenBatchReportData}
          component="FINCENBatchReportListing"
          parentComponent="SystemSettings"
        />
      )}

      {FINCENSingleReportListing === "FinCEN XME Report" && (
        <DynamicTable
          headings={fincenXMEReportHeadings}
          tableData={fincenXMEReportData}
          component="FINCENXMEReportListing"
          parentComponent="SystemSettings"
        />
      )}
    </>
  );
}

export default FINCENSingleReportListing;
