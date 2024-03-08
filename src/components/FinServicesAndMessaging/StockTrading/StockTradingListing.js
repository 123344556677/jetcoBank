import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { recentActivityHeadingsTableData } from "mock-data/Data";
import { recentActivityHeadingsTable } from "mock-data/Data";
import {
  stockTradingListingHeadingsTableData,
  stockTradingListingHeadingsTable,
} from "mock-data/Data";
import { stockTradingListingHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";
function StockTradingListing() {
  const [StockTradingListing, setStockTradingListing] = useState();
  const handleActiveStockTradingListing = (val) => {
    setStockTradingListing(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={stockTradingListingHeadings}
          buttonValue="no-button"
          checkActiveLink={handleActiveStockTradingListing}
          defaultValue="Stock Market"
          parentComponent="FinServicesAndMessaging"
        />
        <div className="mt-3">
          {StockTradingListing === "Stock Market" && (
            <DynamicTable
              headings={stockTradingListingHeadingsTable}
              tableData={stockTradingListingHeadingsTableData}
              component="StockTradingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {StockTradingListing === "Recent Activity" && (
            <DynamicTable
              headings={recentActivityHeadingsTable}
              tableData={recentActivityHeadingsTableData}
              component="StockTradingListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default StockTradingListing;
