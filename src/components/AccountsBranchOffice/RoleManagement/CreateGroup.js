import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createGroupManagementForm } from 'mock-data/FormData'
import React from 'react'

const CreateGroup = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Group"/>
      <DynamicForm formData={createGroupManagementForm} component="Group Management" buttonValue="Create Group"/>
      </div>
    </div>
  )
}

export default CreateGroup