import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { financialInstituitionSettingForm } from 'mock-data/FormData'
import React from 'react'

const AddFinancialInstituitionForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Financial Instituition Settings" />
        <DynamicForm
          formData={financialInstituitionSettingForm}
          component="Financial Instituition Settings Form"
          buttonValue="Financial Instituition Settings"
        />
      </div>
    </div>
  )
}

export default AddFinancialInstituitionForm