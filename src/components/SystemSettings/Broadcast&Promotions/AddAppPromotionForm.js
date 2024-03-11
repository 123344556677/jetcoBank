import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { appPromotionForm } from 'mock-data/FormData'
import React from 'react'

const AddAppPromotionForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Add In-App Promotion" />
        <DynamicForm
          formData={appPromotionForm}
          component="App Promotions Form"
          buttonValue="Add In-App Promotions"
          parentComponent="SystemSettings"
        />
      </div>
    </div>
  )
}

export default AddAppPromotionForm