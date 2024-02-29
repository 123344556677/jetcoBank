import React, { useState } from "react";
import ProfileBar from "../ProfileBar";
import { Form, Input, Label } from "reactstrap";
import { addContactForm } from "mock-data/FormData";
import DynamicForm from "components/DynamicForm/DynamicForm";
import PreviousMessages from "components/Inbox/PreviousMessages";
import Inbox from "components/Inbox/Inbox";
import Chat from "components/Chat/Chat";

const Contact = () => {
  const [activeProfileBarComponent, setProfileBarComponent] = useState();
  const handleProfileBarValue = (data) => {
    setProfileBarComponent(data);
  };
  const [activeChat,setActiveChat]=useState(false)
  const handleChatNavigation=(val)=>{
   setActiveChat(val)
  }
  return (
    <div className="ml-lg-2 mr-lg-2 mt-5">
      <ProfileBar
        value={["Inbox", "Create"]}
        defaultValue="Create"
        component={handleProfileBarValue}
      />
      {activeProfileBarComponent === "Create" && (
        <>
          <DynamicForm formData={addContactForm} component="Contact" />
          <PreviousMessages />
        </>
      )}
      {activeProfileBarComponent === "Inbox" &&(
      activeChat?
      <Chat/>
      :
      <Inbox inboxChat={handleChatNavigation}/>)}
    </div>
  );
};

export default Contact;
