import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { featureForUsers } from "mock-data/FormData";
import { createUserFeatureForm } from "mock-data/FormData";
import React, { useState } from "react";

const FeatureControl = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <FormTopBar buttonValue="Feature Conrol" />
        <DynamicForm
          formData={createUserFeatureForm}
          component="User Features"
          parentComponent="Feature Control"
          buttonValue="no-button"
          defaultSwitchOptions={featureForUsers}
          defaultSwitchLabel="Feature For User"
          defaultSwitchOption="User"
        />
      </div>
    </div>
  );
};

export default FeatureControl;
