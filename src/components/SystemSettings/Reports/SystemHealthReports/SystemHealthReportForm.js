import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { systemHealthReportForm } from 'mock-data/FormData'
import React from 'react'
function SystemHealthReportForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
     <FormTopBar buttonValue="System Heath Reports" />
      <DynamicForm
        formData={systemHealthReportForm}
        component="systemHealthReportForm"
        buttonValue="Generate System Health Report"
        parentComponent="SystemSettings"
      />
    </div>
  </div>
  )
}

export default SystemHealthReportForm