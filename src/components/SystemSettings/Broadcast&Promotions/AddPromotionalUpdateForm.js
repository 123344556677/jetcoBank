import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { promotionalUpdateForm } from "mock-data/FormData";
import React from "react";

const AddPromotionalUpdateForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Add New Promotion" />
        <DynamicForm
          formData={promotionalUpdateForm}
          component="Promotional Update Form"
          buttonValue="Add New Promotion"
          parentComponent="SystemSettings"
        />
      </div>
    </div>
  );
};

export default AddPromotionalUpdateForm;
