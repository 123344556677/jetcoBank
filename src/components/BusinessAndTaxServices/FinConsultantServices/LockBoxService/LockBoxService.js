import DataCards from "components/DataCards/DataCards";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { lockBoxData } from "mock-data/Data";
import { lockBoxHeadings } from "mock-data/Data";
import { lockBoxCardData } from "mock-data/Data";
import React from "react";

const LockBoxService = () => {
  return (
    <div>
      <DataCards cardVal={lockBoxCardData} component="mailbox" />
      <DynamicTable
        headings={lockBoxHeadings}
        tableData={lockBoxData}
        component="lockBoxService"
        parentComponent="BusinessAndTaxServices"
      />
    </div>
  );
};

export default LockBoxService;
