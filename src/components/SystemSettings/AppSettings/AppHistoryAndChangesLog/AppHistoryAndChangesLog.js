import DynamicTable from "components/DynamicTable/DynamicTable";
import { appHistoryData } from "mock-data/Data";
import { appHistoryHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const AppHistoryAndChangesLog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">App History & Changes Log</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/accountsAndBranch/addCheckingAccount")
          }
        >
          App History & Changes Log
        </Button>
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
