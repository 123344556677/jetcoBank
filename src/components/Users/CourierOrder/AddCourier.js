import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addCourierForm } from 'mock-data/FormData'

const AddCourier = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Courier"/>
      <DynamicForm formData={addCourierForm} component="Courier"/>
      </div>
    </div>
  )
}

export default AddCourier