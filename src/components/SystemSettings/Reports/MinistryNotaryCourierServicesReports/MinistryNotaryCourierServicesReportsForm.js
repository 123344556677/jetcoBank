import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { ministryNotaryCourierServicesReportsForm } from "mock-data/FormData";
import React from "react";
function MinistryNotaryCourierServicesReportsForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Ministry/ Notary/ Courier Services Reportst" />
        <DynamicForm
          formData={ministryNotaryCourierServicesReportsForm}
          component="MinistryNotaryCourierServicesReportsForm"
          buttonValue="Generate Ministry/ Notary/ Courier Services Reports"
          parentComponent="SystemSettings"
        />
      </div>
    </div>
  );
}

export default MinistryNotaryCourierServicesReportsForm;
