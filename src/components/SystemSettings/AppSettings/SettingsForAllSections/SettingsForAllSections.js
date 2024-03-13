import DynamicTable from "components/DynamicTable/DynamicTable";
import { settingForAllData } from "mock-data/Data";
import { settingForAllHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const SettingsForAllSections = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Settings For All Sections</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/accountsAndBranch/addCheckingAccount")
          }
        >
          Settings For All Sections
        </Button>
      </div>
      <DynamicTable
        headings={settingForAllHeadings}
        tableData={settingForAllData}
        component="SettingForAll"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default SettingsForAllSections;
