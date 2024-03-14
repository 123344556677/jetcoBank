import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { securitySettingsForm } from 'mock-data/FormData'
import React from 'react'

const AddSecuritySettingsForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Security Settings" />
        <DynamicForm
          formData={securitySettingsForm}
          component="Security Settings Form"
          buttonValue="Save Security Settings"
        />
      </div>
    </div>
  )
}

export default AddSecuritySettingsForm