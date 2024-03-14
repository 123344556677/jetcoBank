import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { addFeatureAndDisplayForm } from 'mock-data/FormData'
import React from 'react'

const AddFeatureAndDisplaySettings = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="In-App Feature(s) & Display Settings" />
        <DynamicForm formData={addFeatureAndDisplayForm} component="In-App Feature(s) & Display Settings Form" buttonValue="Save In-App Feature(s) & Display Settings"/>
      </div>
    </div>
  )
}

export default AddFeatureAndDisplaySettings