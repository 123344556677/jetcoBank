import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createMessageForm } from 'mock-data/FormData'
import React from 'react'
function FinancialMessaging() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
      <FormTopBar buttonValue="Create Finanical Messaging" />
    <DynamicForm
    formData={createMessageForm}
    component="FinancialMessaging"
    buttonValue="Create Finanical Messaging"
    parentComponent="FinServicesAndManagement"
  />
     </div>
    </div>
  )
}

export default FinancialMessaging