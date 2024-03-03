import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createNonProfitForm } from 'mock-data/FormData'
import React from 'react'

const AddNonProfitAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Non-Profit Accounts"/>
      <DynamicForm formData={createNonProfitForm} component="Non-Profit Form" buttonValue="Create Non-Profit Accounts"/>
      </div>
    </div>
  )
}

export default AddNonProfitAccount