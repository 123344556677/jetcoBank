import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { customizeButtonAndTextForm } from 'mock-data/FormData'
import React from 'react'

const AddCustomizeButtonAndText = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Customize Buttons & Text" />
        <DynamicForm formData={customizeButtonAndTextForm} component="Customize Buttons & Text Form" buttonValue="Save Customize Buttons & Text"/>
      </div>
    </div>
  )
}

export default AddCustomizeButtonAndText