import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { statisticsReportForm } from 'mock-data/FormData'
import React from 'react'
function StatisticsReportForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
     <FormTopBar buttonValue="Statistics Report" />
      <DynamicForm
        formData={statisticsReportForm}
        component="StatisticsReportForm"
        buttonValue="Generate Statistics Report"
        parentComponent="SystemSettings"
      />
    </div>
  </div>
  )
}

export default StatisticsReportForm