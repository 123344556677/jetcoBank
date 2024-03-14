import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { settingForAllSectionForm } from "mock-data/FormData";
import React from "react";

const AddSettingsForAllSectionsForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Setting for all Sections" />
        <DynamicForm
          formData={settingForAllSectionForm}
          component="Setting for all Sections Form"
          buttonValue="Save Setting for all Sections"
        />
      </div>
    </div>
  );
};

export default AddSettingsForAllSectionsForm;
