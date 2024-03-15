import DynamicTable from "components/DynamicTable/DynamicTable";
import { taxReportListingData } from "mock-data/Data";
import { taxReportListingHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function TaxReportListing() {
  const navigate=useNavigate()
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Tax Reports</h3>
        <Button size="md" className="add-button pl-3 pr-3 mr-3" onClick={()=>navigate('/admin/systemSettings/addTaxReports')}>
          Generate Tax Report
        </Button>
      </div>
      <DynamicTable
        headings={taxReportListingHeadings}
        tableData={taxReportListingData}
        component="Tax Reports"
      />
    </>
  );
}

export default TaxReportListing;
