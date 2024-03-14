import DynamicForm from 'components/DynamicForm/DynamicForm'
import { productInventoryManagementReportsForm } from 'mock-data/FormData'
import React from 'react'

function ProductInventoryManagementReportsForm() {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
    <div className="main-div">
     
      <DynamicForm
        formData={productInventoryManagementReportsForm}
        component="ProductInventoryManagementReportsForm"
        buttonValue="Generate Product Inventory Management Report"
        parentComponent="SystemSettings"
      />
    </div>
  </div>
  )
}

export default ProductInventoryManagementReportsForm