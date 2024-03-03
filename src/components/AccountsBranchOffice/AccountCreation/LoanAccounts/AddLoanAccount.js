import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createLoanForm } from 'mock-data/FormData'
import React from 'react'

const AddLoanAccount = () => {
  return (
   <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Loan Accounts"/>
      <DynamicForm formData={createLoanForm} component="Loan Form" buttonValue="Create Loan Accounts"/>
      </div>
    </div>
  )
}

export default AddLoanAccount