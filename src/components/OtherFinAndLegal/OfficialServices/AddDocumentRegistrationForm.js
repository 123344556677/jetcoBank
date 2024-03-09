import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { createDocumentRegistrationForm } from "mock-data/FormData";
import React from "react";

const AddDocumentRegistrationForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Register Document" />
        <DynamicForm
          formData={createDocumentRegistrationForm}
          component="Document Registration Form"
          buttonValue="Register Document"
          parentComponent="OtherFinAndLegal"
        />
      </div>
    </div>
  );
};

export default AddDocumentRegistrationForm;
