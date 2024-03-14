import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { addLoginScreenDisplayForm } from 'mock-data/FormData'
import React from 'react'

const AddLoginScreenSettingsForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Login Screen(s) Display Settings" />
        <DynamicForm formData={addLoginScreenDisplayForm} component="Login Screen(s) Display Settings Form" buttonValue="Save Login Screen(s) Display Settings"/>
      </div>
    </div>
  )
}

export default AddLoginScreenSettingsForm