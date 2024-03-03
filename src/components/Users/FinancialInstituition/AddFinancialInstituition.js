import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addFinancialInstForm } from 'mock-data/FormData'

const AddFinancialInstituition = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Add Financial Instituitions" />
        <DynamicForm formData={addFinancialInstForm} component="Financial Instituitions" buttonValue="Add Financial Instituitions" />
      </div>
    </div>
  )
}

export default AddFinancialInstituition