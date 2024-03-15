import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { accountingReportForm } from 'mock-data/FormData'
import React from 'react'
function AccountingReportsForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
     <FormTopBar buttonValue="Accounting Reports" />
      <DynamicForm
        formData={accountingReportForm}
        component="AccountingReportsForm"
        buttonValue="Generate Accounting Reports"
        parentComponent="SystemSettings"
      />
    </div>
  </div>
  )
}

export default AccountingReportsForm