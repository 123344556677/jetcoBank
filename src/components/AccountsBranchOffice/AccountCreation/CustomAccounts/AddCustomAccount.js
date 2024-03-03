import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createCustomForm } from 'mock-data/FormData'
import React from 'react'

const AddCustomAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Custom Accounts"/>
      <DynamicForm formData={createCustomForm} component="Custom Form" buttonValue="Create Custom Accounts"/>
      </div>
    </div>
  )
}

export default AddCustomAccount