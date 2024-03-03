import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createCorporateForm } from 'mock-data/FormData'
import React from 'react'

const AddCorporateAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Corporate Accounts"/>
      <DynamicForm formData={createCorporateForm} component="Corporate Form" buttonValue="Create Corporate Accounts"/>
      </div>
    </div>
  )
}

export default AddCorporateAccount