import DynamicForm from 'components/DynamicForm/DynamicForm'
import { systemHealthReportForm } from 'mock-data/FormData'
import React from 'react'
function SystemHealthReportForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
     
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