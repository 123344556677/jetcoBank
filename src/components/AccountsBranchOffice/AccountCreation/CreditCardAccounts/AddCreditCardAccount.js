import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createCreditCardForm } from 'mock-data/FormData'
import React from 'react'

const AddCreditCardAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Credit Card Accounts"/>
      <DynamicForm formData={createCreditCardForm} component="Credit Card Form" buttonValue="Create Credit Card Accounts"/>
      </div>
    </div>
  )
}

export default AddCreditCardAccount