import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { addProductForm } from 'mock-data/FormData'
import React from 'react'

const AddProductManager = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Saving Accounts"/>
      <DynamicForm formData={addProductForm} component="Add Product Form" buttonValue="Add Product"/>
      </div>
    </div>
  )
}

export default AddProductManager