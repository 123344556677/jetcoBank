import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addContractorForm } from 'mock-data/FormData'

const AddContractor = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Contractor"/>
      <DynamicForm formData={addContractorForm} component="Vendor"/>
      </div>
    </div>
  )
}

export default AddContractor