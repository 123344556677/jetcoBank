import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { msbReportForm } from 'mock-data/FormData'
import React from 'react'
function MSBReportsForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
     <FormTopBar buttonValue="MSB Reports" />
      <DynamicForm
        formData={msbReportForm}
        component="MSBReportsForm"
        buttonValue="Generate MSB Report"
        parentComponent="SystemSettings"
      />
    </div>
  </div>
  )
}

export default MSBReportsForm