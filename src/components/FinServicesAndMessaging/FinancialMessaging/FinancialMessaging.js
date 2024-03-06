import DynamicForm from 'components/DynamicForm/DynamicForm'
import { createMessageForm } from 'mock-data/FormData'
import React from 'react'

function FinancialMessaging() {
  return (
    <DynamicForm
    formData={createMessageForm}
    component="FinancialMessaging"
    buttonValue="Create Finanical Messaging"
    parentComponent="FinServicesAndManagement"
  />
  )
}

export default FinancialMessaging