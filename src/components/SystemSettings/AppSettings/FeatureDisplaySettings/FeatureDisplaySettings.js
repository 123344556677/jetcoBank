import DynamicTable from "components/DynamicTable/DynamicTable";
import { featureAndDisplayData } from "mock-data/Data";
import { featureAndDisplayHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const FeatureDisplaySettings = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          In-App Feature(s) Display Settings
        </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/accountsAndBranch/addCheckingAccount")
          }
        >
          In-App Feature(s) Display Settings
        </Button>
      </div>
      <DynamicTable
        headings={featureAndDisplayHeadings}
        tableData={featureAndDisplayData}
        component="FeaturesAndSettings"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default FeatureDisplaySettings;
