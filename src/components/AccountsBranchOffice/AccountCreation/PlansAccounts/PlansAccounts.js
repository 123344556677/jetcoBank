import DynamicTable from "components/DynamicTable/DynamicTable";
import { accountsData } from "mock-data/Data";
import { accountHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const PlansAccounts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Plans Accounts{" "}
          <span className="total-transactions">(4587)</span>
        </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() => navigate("/admin/accountsAndBranch/addPlanAccount")}
        >
          Create Plans Accounts
        </Button>
      </div>
      <DynamicTable
        headings={accountHeadings}
        tableData={accountsData}
        component="PlanAccount"
        parentComponent="AccountManagement"
      />
    </>
  );
};

export default PlansAccounts;
