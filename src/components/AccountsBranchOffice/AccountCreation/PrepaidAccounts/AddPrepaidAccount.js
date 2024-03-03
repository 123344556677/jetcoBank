import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createPrepaidForm } from 'mock-data/FormData'
import React from 'react'

const AddPrepaidAccount = () => {
  return (
   <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Prepaid Accounts"/>
      <DynamicForm formData={createPrepaidForm} component="Prepaid Form" buttonValue="Create Prepaid Accounts"/>
      </div>
    </div>
  )
}

export default AddPrepaidAccount