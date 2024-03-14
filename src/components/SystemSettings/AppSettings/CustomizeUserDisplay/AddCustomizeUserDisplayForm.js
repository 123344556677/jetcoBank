import DynamicForm from "components/DynamicForm/DynamicForm";
import RadioButtons from "components/DynamicForm/RadioButtons";
import FormTopBar from "components/Users/FormTopBar";
import { customizeUserDisplayForm } from "mock-data/FormData";
import React from "react";

const AddCustomizeUserDisplayForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Customize Users Display Settings" />
        <DynamicForm formData={customizeUserDisplayForm} component="Customize User Display Form" buttonValue="Save Customize User Display Settings"/>
      </div>
    </div>
  );
};

export default AddCustomizeUserDisplayForm;
