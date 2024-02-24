import React from "react";
import "./User.css";
import { Button} from "reactstrap";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { userData } from "mock-data/Data";
import { AgentHeadings } from "mock-data/Data";


const AgentListing = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <div className="d-flex justify-content-between align-items-center mr-lg-3">
          <h3 className="m-4 pages-heading">Agent Detail</h3>
          <Button
            size="md"
            className="add-button pl-3 pr-3 mr-3"
          >
            Add Agent
          </Button>
        </div>
        <DynamicTable headings={AgentHeadings} tableData={userData} />
      </div>
    </div>
  );
};

export default AgentListing;
