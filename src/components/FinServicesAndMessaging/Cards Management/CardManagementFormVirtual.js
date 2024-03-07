import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { cardManagementFormVirtual } from 'mock-data/FormData'
import React from 'react'
function CardManagementFormVirtual() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
      <FormTopBar buttonValue="Add Virtual Card" />
      <DynamicForm
        formData={cardManagementFormVirtual}
        component="CardManagementFormVirtual"
        buttonValue="Add Virtual Card"
        parentComponent="FinServicesAndManagement"
      />
    </div>
  </div>
  )
}

export default CardManagementFormVirtual