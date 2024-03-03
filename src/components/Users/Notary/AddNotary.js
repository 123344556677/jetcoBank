import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addNotaryForm } from 'mock-data/FormData'

const AddNotary = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Add Notary"/>
      <DynamicForm formData={addNotaryForm} component="Notary" buttonValue="Add Notary"/>
      </div>
    </div>
  )
}

export default AddNotary