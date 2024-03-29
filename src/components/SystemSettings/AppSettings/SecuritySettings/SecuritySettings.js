import DynamicTable from "components/DynamicTable/DynamicTable";
import { securitySettingsData } from "mock-data/Data";
import { securitySettingsHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const SecuritySettings = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Security Settings</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/systemSettings/addSecuritySetting")
          }
        >
          Security Settings
        </Button>
      </div>
      <DynamicTable
        headings={securitySettingsHeadings}
        tableData={securitySettingsData}
        component="SecuritySettings"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default SecuritySettings;
