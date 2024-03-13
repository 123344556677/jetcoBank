import DynamicForm from 'components/DynamicForm/DynamicForm'
import { taxReportForm } from 'mock-data/FormData'
import React from 'react'
function TaxReportForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
     
      <DynamicForm
        formData={taxReportForm}
        component="TaxReportForm"
        buttonValue="Generate Tax Report"
        parentComponent="SystemSettings"
      />
    </div>
  </div>
  
  )
}

export default TaxReportForm