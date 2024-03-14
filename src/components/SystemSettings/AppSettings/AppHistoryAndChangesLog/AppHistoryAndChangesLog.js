import DynamicTable from "components/DynamicTable/DynamicTable";
import { appHistoryData } from "mock-data/Data";
import { appHistoryHeadings } from "mock-data/Data";
import React from "react";

const AppHistoryAndChangesLog = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">App History & Changes Log</h3>
      </div>
      <DynamicTable
        headings={appHistoryHeadings}
        tableData={appHistoryData}
        component="AppHistoryAndChanges"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default AppHistoryAndChangesLog;
