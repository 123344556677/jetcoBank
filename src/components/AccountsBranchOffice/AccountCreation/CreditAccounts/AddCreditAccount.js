import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createCreditForm } from 'mock-data/FormData'
import React from 'react'

const AddCreditAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Credit Accounts"/>
      <DynamicForm formData={createCreditForm} component="Credit Form" buttonValue="Create Credit Accounts"/>
      </div>
    </div>
  )
}

export default AddCreditAccount