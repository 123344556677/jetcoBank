import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { cardManagementFormPrepaid } from "mock-data/FormData";
import React from "react";
function CardManagementFormPrepaid() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Add Prepaid Card" />
        <DynamicForm
          formData={cardManagementFormPrepaid}
          component="CardManagementFormPrepaid"
          buttonValue="Add Prepaid Card"
          parentComponent="FinServicesAndManagement"
        />
      </div>
    </div>
  );
}

export default CardManagementFormPrepaid;
