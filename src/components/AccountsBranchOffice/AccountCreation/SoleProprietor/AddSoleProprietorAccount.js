import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createSoleProprietorForm } from 'mock-data/FormData'
import React from 'react'

const AddSoleProprietorAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Sole Proprietor Accounts"/>
      <DynamicForm formData={createSoleProprietorForm} component="Sole Proprietor Form" buttonValue="Create Sole Proprietor Accounts"/>
      </div>
    </div>
  )
}

export default AddSoleProprietorAccount