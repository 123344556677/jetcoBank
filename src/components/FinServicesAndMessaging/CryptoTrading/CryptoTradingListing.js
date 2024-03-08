import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { cryptoRecentActivityHeadingsTableData } from "mock-data/Data";
import { cryptoRecentActivityHeadingsTable } from "mock-data/Data";
import {
  stockTradingListingHeadingsTableData,
  stockTradingListingHeadingsTable,
} from "mock-data/Data";
import { cryptoTradingListingHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";
function CryptoTradingListing() {
  const [CryptoTradingListing, setCryptoTradingListing] = useState();
  const handleActiveCryptoTradingListing = (val) => {
    setCryptoTradingListing(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={cryptoTradingListingHeadings}
          buttonValue="no-button"
          checkActiveLink={handleActiveCryptoTradingListing}
          defaultValue="Crypto Trade"
          parentComponent="FinServicesAndMessaging"
        />
        <div className="mt-3">
          {CryptoTradingListing === "Crypto Trade" && (
            <DynamicTable
              headings={stockTradingListingHeadingsTable}
              tableData={stockTradingListingHeadingsTableData}
              component="CryptoTrading"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {CryptoTradingListing === "Recent Activity" && (
            <DynamicTable
              headings={cryptoRecentActivityHeadingsTable}
              tableData={cryptoRecentActivityHeadingsTableData}
              component="CryptoTrading"
              parentComponent="FinServicesAndMessaging"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CryptoTradingListing;
