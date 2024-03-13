import DynamicTable from "components/DynamicTable/DynamicTable";
import { userDisplayData } from "mock-data/Data";
import { userDisplaysHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const CustomizeUserDisplayListing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Customize User Display Settings</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/systemSettings/addCustomizeUserDisplay")
          }
        >
          Customize User Display Settings
        </Button>
      </div>
      <DynamicTable
        headings={userDisplaysHeadings}
        tableData={userDisplayData}
        component="UserDisplay"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default CustomizeUserDisplayListing;
