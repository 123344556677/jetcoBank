import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { addConsultantForm } from 'mock-data/FormData'
import React from 'react'

const AddConsultantServices = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Add Consultant"/>
      <DynamicForm formData={addConsultantForm} component="Consultant Form" buttonValue="Add Consultant"/>
      </div>
    </div>
  )
}

export default AddConsultantServices