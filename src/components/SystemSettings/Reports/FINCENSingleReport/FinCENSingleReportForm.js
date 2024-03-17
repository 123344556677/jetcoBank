import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { fincenSingleReportForm } from "mock-data/FormData";
import React from "react";

function FinCENSingleReportForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Generate FinCEN Single Report" />
        <DynamicForm
          formData={fincenSingleReportForm}
          component="FinCENSingleReportForm"
          buttonValue="Generate FinCEN Single Report"
          parentComponent="SystemSettings"
        />
      </div>
    </div>
  );
}

export default FinCENSingleReportForm;
