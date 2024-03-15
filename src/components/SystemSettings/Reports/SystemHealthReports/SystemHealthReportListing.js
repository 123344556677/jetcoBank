import DynamicTable from "components/DynamicTable/DynamicTable";
import { transactionLogsData } from "mock-data/Data";
import { transactionLogsHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function SystemHealthReportListing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">System Health Reports </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/systemSettings/addSystemHealthReports")
          }
        >
          Generate System Health Reports
        </Button>
      </div>
      <DynamicTable
        headings={transactionLogsHeadings}
        tableData={transactionLogsData}
        component="System Health Reports"
      />
    </>
  );
}

export default SystemHealthReportListing;
