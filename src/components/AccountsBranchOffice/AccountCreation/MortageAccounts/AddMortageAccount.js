import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createMortageForm } from 'mock-data/FormData'
import React from 'react'

const AddMortageAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Mortage Accounts"/>
      <DynamicForm formData={createMortageForm} component="Mortage Form" buttonValue="Create Mortage Accounts"/>
      </div>
    </div>
  )
}

export default AddMortageAccount