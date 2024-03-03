import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createPlanForm } from 'mock-data/FormData'
import React from 'react'

const AddPlanAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Plans Accounts"/>
      <DynamicForm formData={createPlanForm} component="Plans Form" buttonValue="Create Plans Accounts"/>
      </div>
    </div>
  )
}

export default AddPlanAccount