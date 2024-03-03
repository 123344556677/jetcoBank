import DynamicForm from 'components/DynamicForm/DynamicForm';
import FormTopBar from 'components/Users/FormTopBar';
import { createSavingForm } from 'mock-data/FormData';
import React from 'react'


const AddSavingAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
      <FormTopBar buttonValue="Create Saving Accounts"/>
      <DynamicForm formData={createSavingForm} component="Saving Form" buttonValue="Create Saving Accounts"/>
      </div>
    </div>
      
  )
}

export default AddSavingAccount