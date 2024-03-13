import DynamicTable from "components/DynamicTable/DynamicTable";
import { loginScreenData } from "mock-data/Data";
import { loginScreenHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const LoginScreenSettings = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Login Screen(s) Display Settings</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/accountsAndBranch/addCheckingAccount")
          }
        >
          Login Screen(s Display Settings
        </Button>
      </div>
      <DynamicTable
        headings={loginScreenHeadings}
        tableData={loginScreenData}
        component="LoginScreenSettings"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default LoginScreenSettings;
