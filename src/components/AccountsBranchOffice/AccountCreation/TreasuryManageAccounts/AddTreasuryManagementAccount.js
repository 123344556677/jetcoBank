import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createTreasuryManagementForm } from 'mock-data/FormData'
import React from 'react'

const AddTreasuryManagementAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Treasury Management Accounts"/>
      <DynamicForm formData={createTreasuryManagementForm} component="Treasury Management Form" buttonValue="Create Treasury Management Accounts"/>
      </div>
    </div>
  )
}

export default AddTreasuryManagementAccount