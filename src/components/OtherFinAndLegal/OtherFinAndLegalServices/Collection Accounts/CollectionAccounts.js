import DynamicTable from "components/DynamicTable/DynamicTable";
import { collectionAccountsHeading } from "mock-data/Data";
import { collectionAccountsData } from "mock-data/Data";
import React from "react";

function CollectionAccounts() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Collection Amounts{" "}
          <span className="total-transactions">(30)</span>
        </h3>
      </div>
      <DynamicTable
        headings={collectionAccountsHeading}
        tableData={collectionAccountsData}
        component="Collection Accounts"
      />
    </>
  );
}

export default CollectionAccounts;
