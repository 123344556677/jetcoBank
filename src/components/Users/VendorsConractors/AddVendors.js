import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addVendorForm } from 'mock-data/FormData'

const AddVendors = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Vendor"/>
      <DynamicForm formData={addVendorForm} component="Vendor"/>
      </div>
    </div>
  )
}

export default AddVendors