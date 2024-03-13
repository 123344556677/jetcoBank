import DynamicTable from "components/DynamicTable/DynamicTable";
import { languageSettingsData } from "mock-data/Data";
import { languageSettingsHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const LanguageSettings = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Language Settings</h3>
        <div>
          <Button
            size="md"
            className="add-button pl-3 pr-3 mr-3"
            onClick={() =>
              navigate("/admin/accountsAndBranch/addCheckingAccount")
            }
          >
            Translate Language
          </Button>
          <Button
            size="md"
            className="add-button pl-3 pr-3 mr-3 ml-auto"
            onClick={() =>
              navigate("/admin/accountsAndBranch/addCheckingAccount")
            }
          >
            Language Settings
          </Button>
        </div>
      </div>

      <DynamicTable
        headings={languageSettingsHeadings}
        tableData={languageSettingsData}
        component="LanguageSettings"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default LanguageSettings;
