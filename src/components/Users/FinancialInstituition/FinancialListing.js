import React from "react";
import "../User.css";
import { Button } from "reactstrap";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { financialHeadings } from "mock-data/Data";
import { financialData } from "mock-data/Data";
import { useNavigate } from "react-router-dom";

const FinancialListing = () => {
  const navigate=useNavigate()
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <div className="d-flex justify-content-between align-items-center mr-lg-3">
          <h3 className="m-4 pages-heading">Financial Instituitions</h3>
          <Button
            size="md"
            className="add-button pl-3 pr-3 mr-3"
            onClick={()=>navigate('/admin/userManagement/addInstituition')}
          >
            Add Financial Instituitions
          </Button>
        </div>
        <DynamicTable headings={financialHeadings} tableData={financialData} />
      </div>
    </div>
  );
};

export default FinancialListing;
