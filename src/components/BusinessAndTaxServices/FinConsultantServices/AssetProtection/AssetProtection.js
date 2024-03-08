import DataCards from "components/DataCards/DataCards";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { assetProtectionData } from "mock-data/Data";
import { assetProtectionHeadings } from "mock-data/Data";
import { assetProtectionCardData } from "mock-data/Data";
import React from "react";

const AssetProtection = () => {
  return (
    <div>
      <DataCards cardVal={assetProtectionCardData} component="mailbox" />
      <DynamicTable
        headings={assetProtectionHeadings}
        tableData={assetProtectionData}
        component="assetProtection"
        parentComponent="BusinessAndTaxServices"
      />
    </div>
  );
};

export default AssetProtection;
