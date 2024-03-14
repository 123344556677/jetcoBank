import DynamicTable from "components/DynamicTable/DynamicTable";
import { networkStatusReportData } from "mock-data/Data";
import { networkStatusReportHeadings } from "mock-data/Data";
import React from "react";
import { Button } from "reactstrap";
function NetworkStatusReportListing() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Network Status Report</h3>
        <Button size="md" className="add-button pl-3 pr-3 mr-3">
          Generate Network Status Report
        </Button>
      </div>
      <DynamicTable
        headings={networkStatusReportHeadings}
        tableData={networkStatusReportData}
        component="Tax Reports"
      />
    </>
  );
}

export default NetworkStatusReportListing;
