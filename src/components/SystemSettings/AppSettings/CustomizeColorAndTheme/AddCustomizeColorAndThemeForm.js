import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { customizeColorAndThemeForm } from 'mock-data/FormData'
import React from 'react'

const AddCustomizeColorAndThemeForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Customize Colors & Theme" />
        <DynamicForm formData={customizeColorAndThemeForm} component="Customize Colors & Theme Form" buttonValue="Save Customize Colors & Theme"/>
      </div>
    </div>
  )
}

export default AddCustomizeColorAndThemeForm