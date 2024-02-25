import DynamicForm from 'components/DynamicForm/DynamicForm'
import React from 'react'
import FormTopBar from '../FormTopBar'
import { addUserForm } from 'mock-data/FormData'

const AddUser = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="User"/>
      <DynamicForm formData={addUserForm} component="User"/>
      </div>
    </div>
  )
}

export default AddUser