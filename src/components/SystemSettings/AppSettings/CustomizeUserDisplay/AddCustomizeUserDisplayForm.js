import RadioButtons from "components/DynamicForm/RadioButtons";
import FormTopBar from "components/Users/FormTopBar";
import React from "react";

const AddCustomizeUserDisplayForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Customize Users Display Settings" />
        <RadioButtons/>
      </div>
    </div>
  );
};

export default AddCustomizeUserDisplayForm;
