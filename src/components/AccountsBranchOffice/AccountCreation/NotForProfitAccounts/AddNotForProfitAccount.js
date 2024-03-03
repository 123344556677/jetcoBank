import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createNotForProfitForm } from 'mock-data/FormData'
import React from 'react'

const AddNotForProfitAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Not-For-Profit Accounts"/>
      <DynamicForm formData={createNotForProfitForm} component="Not-For-Profit Form" buttonValue="Create Not-For-Profit Accounts"/>
      </div>
    </div>
  )
}

export default AddNotForProfitAccount