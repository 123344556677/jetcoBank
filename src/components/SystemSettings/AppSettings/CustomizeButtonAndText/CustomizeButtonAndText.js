import DynamicTable from "components/DynamicTable/DynamicTable";
import { buttonsAndTextData } from "mock-data/Data";
import { buttonAndTextHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const CustomizeButtonAndText = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Customize Buttons & Text</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/accountsAndBranch/addCheckingAccount")
          }
        >
          Customize Buttons & Text
        </Button>
      </div>
      <DynamicTable
        headings={buttonAndTextHeadings}
        tableData={buttonsAndTextData}
        component="ButtonAndText"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default CustomizeButtonAndText;
