import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addRepresentativeForm } from 'mock-data/FormData'

const AddRepresentative = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Add Tax Representative"/>
      <DynamicForm formData={addRepresentativeForm} component="Tax Representative" buttonValue="Add Tax Representative"/>
      </div>
    </div>
  )
}

export default AddRepresentative