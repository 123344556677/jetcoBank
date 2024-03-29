import DynamicTable from "components/DynamicTable/DynamicTable";
import { statisticsReportData } from "mock-data/Data";
import { statisticsReportHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function StatisticsReportListing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Statistics Report </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() => navigate("/admin/systemSettings/addStatisticsReports")}
        >
          Generate Statistics Reports
        </Button>
      </div>
      <DynamicTable
        headings={statisticsReportHeadings}
        tableData={statisticsReportData}
        component="Statistics Report"
      />
    </>
  );
}

export default StatisticsReportListing;
