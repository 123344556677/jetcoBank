import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { languageSettingForm } from "mock-data/FormData";
import React from "react";

const AddLanguageSettingsForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Language Settings" />
        <DynamicForm
          formData={languageSettingForm}
          component="Language Settings Form"
          buttonValue="Save Language Settings"
        />
      </div>
    </div>
  );
};

export default AddLanguageSettingsForm;
