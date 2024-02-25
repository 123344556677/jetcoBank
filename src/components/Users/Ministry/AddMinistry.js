import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addMinistryForm } from 'mock-data/FormData'

const AddMinistry = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Ministry"/>
      <DynamicForm formData={addMinistryForm} component="Ministry"/>
      </div>
    </div>
  )
}

export default AddMinistry