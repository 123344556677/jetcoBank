import React from "react";
import FormTopBar from "../FormTopBar";
import DynamicForm from "components/DynamicForm/DynamicForm";
import { addGovtOfficalForm } from "mock-data/FormData";

const AddGovtOfficial = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Add Government Officials" />
        <DynamicForm formData={addGovtOfficalForm} component="Government Officials" buttonValue="Add Government Officials" />
      </div>
    </div>
  );
};

export default AddGovtOfficial;
