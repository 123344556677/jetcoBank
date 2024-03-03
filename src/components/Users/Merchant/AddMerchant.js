import React from 'react'
import FormTopBar from '../FormTopBar'
import DynamicForm from 'components/DynamicForm/DynamicForm'
import { addMerchantForm } from 'mock-data/FormData'

const AddMerchant = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Add Merchant"/>
      <DynamicForm formData={addMerchantForm} component="Merchant" buttonValue="Add Merchant"/>
      </div>
    </div>
  )
}

export default AddMerchant