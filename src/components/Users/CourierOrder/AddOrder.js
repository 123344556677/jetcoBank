import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addOrderForm } from 'mock-data/FormData'

const AddOrder = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Add Order"/>
      <DynamicForm formData={addOrderForm} component="Order" buttonValue="Add Order"/>
      </div>
    </div>
  )
}

export default AddOrder