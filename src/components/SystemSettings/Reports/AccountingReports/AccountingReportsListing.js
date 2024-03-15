import DynamicTable from "components/DynamicTable/DynamicTable";
import { accountingReportsData } from "mock-data/Data";
import { accountingReportsHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function AccountingReportsListing() {
  const navigate=useNavigate()
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3" onClick={()=>navigate('/admin/systemSettings/addAccountingReports')}>
        <h3 className="m-4 pages-heading">Accounting Reports </h3>
        <Button size="md" className="add-button pl-3 pr-3 mr-3">
          Generate Accounting Reports
        </Button>
      </div>
      <DynamicTable
        headings={accountingReportsHeadings}
        tableData={accountingReportsData}
        component="Accounting Reports"
      />
    </>
  );
}

export default AccountingReportsListing;
