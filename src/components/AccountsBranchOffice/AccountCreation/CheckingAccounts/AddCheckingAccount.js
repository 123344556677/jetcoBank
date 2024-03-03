import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createCheckingForm } from 'mock-data/FormData'
import React from 'react'

const AddCheckingAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Checking Accounts"/>
      <DynamicForm formData={createCheckingForm} component="Checking Form" buttonValue="Create Saving Accounts"/>
      </div>
    </div>
  )
}

export default AddCheckingAccount