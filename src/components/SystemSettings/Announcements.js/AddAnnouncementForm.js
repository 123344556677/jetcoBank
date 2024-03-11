import DynamicForm from 'components/DynamicForm/DynamicForm'
import FormTopBar from 'components/Users/FormTopBar'
import { announcementForm } from 'mock-data/FormData'
import React from 'react'

const AddAnnouncementForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="In-App Announcements" />
        <DynamicForm
          formData={announcementForm}
          component="Announcements Form"
          buttonValue="Add In-App Announcements"
          parentComponent="SystemSettings"
        />
      </div>
    </div>
  )
}

export default AddAnnouncementForm