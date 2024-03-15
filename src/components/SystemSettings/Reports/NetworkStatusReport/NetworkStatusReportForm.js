import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { networkStatusReportForm } from "mock-data/FormData";
import React from "react";
function NetworkStatusReportForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Network Status Report" />
        <DynamicForm
          formData={networkStatusReportForm}
          component="NetworkStatusReportForm"
          buttonValue="Generate Network Status Report"
          parentComponent="SystemSettings"
        />
      </div>
    </div>
  );
}

export default NetworkStatusReportForm;
