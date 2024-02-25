import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addAgentForm } from 'mock-data/FormData'

const AddAgent = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Agent"/>
      <DynamicForm formData={addAgentForm} component="Agent"/>
      </div>
    </div>
  )
}

export default AddAgent