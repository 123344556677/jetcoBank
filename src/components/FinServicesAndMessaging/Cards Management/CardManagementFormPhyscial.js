import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { cardManagementFormPhyscial } from 'mock-data/FormData'
import React from 'react'
function CardManagementFormPhyscial() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
      <FormTopBar buttonValue="Add Physcial Card" />
      <DynamicForm
        formData={cardManagementFormPhyscial}
        component="CardManagementFormPhysical"
        buttonValue="Add Physical Card"
        parentComponent="FinServicesAndManagement"
      />
    </div>
  </div>
  )
}

export default CardManagementFormPhyscial