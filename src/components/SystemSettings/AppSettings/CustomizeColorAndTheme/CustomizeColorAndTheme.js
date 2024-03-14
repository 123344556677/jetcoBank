import DynamicTable from "components/DynamicTable/DynamicTable";
import { colorAndThemeData } from "mock-data/Data";
import { colorAndThemeHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const CustomizeColorAndTheme = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Customize Color & Theme</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/systemSettings/addCustomizeColor&Theme")
          }
        >
          Customize Color & Theme
        </Button>
      </div>
      <DynamicTable
        headings={colorAndThemeHeadings}
        tableData={colorAndThemeData}
        component="colorAndTheme"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default CustomizeColorAndTheme;
