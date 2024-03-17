import DynamicBalanceSheetTable from "components/DynamicTable/StrippedTable";
import FormTopBar from "components/Users/FormTopBar";
import { finBatchReportData } from "mock-data/Data";
import React from "react";
import { Button, Form, Label } from "reactstrap";

const FinCENBatchReportForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Generate FinCEN Batch Report" />
        <Form className="m-4">
          <Label className="form-label">Upload CSV File</Label>
          <br />
          <Button type="button" className="login-button pl-4 pr-4">
            Upload
          </Button>
          <DynamicBalanceSheetTable data={finBatchReportData} />
          <div className="text-center mt-5">
            <Button
              type="submit"
              className="login-button mt-4 mb-4 form-button"
            >
              Generate FinCEN Batch Report
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FinCENBatchReportForm;
