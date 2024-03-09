import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { addEFilingForm } from 'mock-data/FormData'
import React from 'react'

const AddEFilingForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Add E-Filing"/>
      <DynamicForm formData={addEFilingForm} component="E-FilingForm" buttonValue="Add E-Filing"/>
      </div>
    </div>
  )
}

export default AddEFilingForm