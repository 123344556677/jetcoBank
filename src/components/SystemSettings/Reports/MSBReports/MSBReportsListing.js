import DynamicTable from "components/DynamicTable/DynamicTable";
import { msbReportsListingData } from "mock-data/Data";
import { msbReportsListingHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function MSBReportsListing() {
  const navigate=useNavigate()
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">MSB Reports </h3>
        <Button size="md" className="add-button pl-3 pr-3 mr-3" onClick={()=>navigate('/admin/systemSettings/addMsbReports')}>
          Generate MSB Reports
        </Button>
      </div>
      <DynamicTable
        headings={msbReportsListingHeadings}
        tableData={msbReportsListingData}
        component="MSB Reports"
      />
    </>
  );
}

export default MSBReportsListing;
