import DynamicTable from "components/DynamicTable/DynamicTable";
import { currencyExchangeListingHeadingsTableData } from "mock-data/Data";
import { currencyExchangeListingHeadingsTable } from "mock-data/Data";
import React from "react";
function CurrencyExchangeListing() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <div className="d-flex justify-content-between align-items-center mr-lg-3">
          <h3 className="m-4 pages-heading">Currency Exchange</h3>
        </div>
        <DynamicTable
          headings={currencyExchangeListingHeadingsTable}
          tableData={currencyExchangeListingHeadingsTableData}
          component="CurrencyExchange"
          parentComponent="FinServicesAndMessaging"
        />
      </div>
    </div>
  );
}

export default CurrencyExchangeListing;
