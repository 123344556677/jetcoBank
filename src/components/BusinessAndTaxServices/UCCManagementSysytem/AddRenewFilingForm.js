import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { createPortfolioRenewFileForm } from 'mock-data/FormData'
import React from 'react'

const AddRenewFilingForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Renew New Filing"/>
      <DynamicForm formData={createPortfolioRenewFileForm} component="Renew Filing Form" buttonValue="Renew New Filing"/>
      </div>
    </div>
  )
}

export default AddRenewFilingForm