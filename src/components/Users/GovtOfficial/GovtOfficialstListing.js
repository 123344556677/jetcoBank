import React from "react";
import "../User.css";
import { Button} from "reactstrap";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { GovtOfficialsHeadings } from "mock-data/Data";
import { GovtOfficialsData } from "mock-data/Data";
import { useNavigate } from "react-router-dom";

const GovtOfficialsListing = () => {
  const navigate=useNavigate()
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <div className="d-flex justify-content-between align-items-center mr-lg-3">
          <h3 className="m-4 pages-heading">Government Officials</h3>
          <Button
            size="md"
            className="add-button pl-3 pr-3 mr-3"
            onClick={()=>navigate('/admin/userManagement/addOfficial')}
          >
            Add Official
          </Button>
        </div>
        <DynamicTable headings={GovtOfficialsHeadings} tableData={GovtOfficialsData} />
      </div>
    </div>
  );
};

export default GovtOfficialsListing;
