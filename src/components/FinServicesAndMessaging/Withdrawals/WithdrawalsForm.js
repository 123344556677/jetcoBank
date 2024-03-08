import { withdrawalsForm } from 'mock-data/FormData'
import React from 'react'

function WithdrawalsForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Add Withdrawals Method" />
        <DynamicForm
          formData={withdrawalsForm}
          component="withdrawalsForm"
          buttonValue="Add Withdrawal Method"
          parentComponent="FinServicesAndManagement"
        />
      </div>
    </div>
  )
}

export default WithdrawalsForm