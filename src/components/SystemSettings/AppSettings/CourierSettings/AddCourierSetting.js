import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { courierSettingForm } from "mock-data/FormData";
import React from "react";

const AddCourierSetting = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Courier Settings" />
        <DynamicForm
          formData={courierSettingForm}
          component="Courier Settings Form"
          buttonValue="Save Courier Settings"
        />
      </div>
    </div>
  );
};

export default AddCourierSetting;
