import DynamicTable from "components/DynamicTable/DynamicTable";
import { accountsData } from "mock-data/Data";
import { accountHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const CashManagementAccounts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Cash Management Accounts{" "}
          <span className="total-transactions">(4587)</span>
        </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() => navigate("/admin/userManagement/addAgent")}
        >
          Create Cash Management Account
        </Button>
      </div>
      <DynamicTable
        headings={accountHeadings}
        tableData={accountsData}
        component="Cash Managment Account"
      />
    </>
  );
};

export default CashManagementAccounts;