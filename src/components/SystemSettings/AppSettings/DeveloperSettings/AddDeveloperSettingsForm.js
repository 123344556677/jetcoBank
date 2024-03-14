import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { developerSettingsForm } from 'mock-data/FormData'
import React from 'react'

const AddDeveloperSettingsForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Developer Settings" />
        <DynamicForm
          formData={developerSettingsForm}
          component="Developer Settings Form"
          buttonValue="Save Developer Settings"
        />
      </div>
    </div>
  )
}

export default AddDeveloperSettingsForm