import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { fincenXMEReportForm } from "mock-data/FormData";
import React from "react";
function FinCENXMLReportForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Generate FinCEN XML Report" />
        <DynamicForm
          formData={fincenXMEReportForm}
          component="FinCENSingleReportForm"
          buttonValue="Generate FinCEN XMl Report"
          parentComponent="SystemSettings"
        />
      </div>
    </div>
  );
}

export default FinCENXMLReportForm;
