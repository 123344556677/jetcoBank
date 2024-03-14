import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { paymentGatewayForm } from 'mock-data/FormData'
import React from 'react'

const AddPaymentGatewayForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Payment Gateways" />
        <DynamicForm
          formData={paymentGatewayForm}
          component="Payment Gateways Form"
          buttonValue="Save Payment Gateways"
        />
      </div>
    </div>
  )
}

export default AddPaymentGatewayForm