import DynamicTable from "components/DynamicTable/DynamicTable";
import { ministryNotaryCourierServicesReportsData } from "mock-data/Data";
import { ministryNotaryCourierServicesReportsHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function MinistryNotaryCourierServicesReportsListing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Ministry/ Notary/ Courier Services Reports
        </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() => navigate("/admin/systemSettings/addNotaryCourierMinistryReports")}
        >
          Generate Ministry/ Notary/ Courier Services Reports
        </Button>
      </div>
      <DynamicTable
        headings={ministryNotaryCourierServicesReportsHeadings}
        tableData={ministryNotaryCourierServicesReportsData}
        component="MinistryNotaryCourierServicesReports"
      />
    </>
  );
}

export default MinistryNotaryCourierServicesReportsListing;
