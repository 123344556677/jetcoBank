import DynamicTable from "components/DynamicTable/DynamicTable";
import { developerSettingsData } from "mock-data/Data";
import { developerSettingsHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const FinancialInstituitionSettings = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Financial Instituition Settings</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/accountsAndBranch/addCheckingAccount")
          }
        >
          Financial Instituition Settings
        </Button>
      </div>
      <DynamicTable
        headings={developerSettingsHeadings}
        tableData={developerSettingsData}
        component="financialInstituitionSettings"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default FinancialInstituitionSettings;
