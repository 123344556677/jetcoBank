import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createCashManagementForm } from 'mock-data/FormData'
import React from 'react'

const AddCashManagementAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Cash Management Accounts"/>
      <DynamicForm formData={createCashManagementForm} component="Cash Management Form" buttonValue="Create Cash Management Accounts"/>
      </div>
    </div>
  )
}

export default AddCashManagementAccount