import ChatSide from "components/Chat/ChatSide";
import React, { useState } from "react";
import InboxUpperBar from "./InboxUpperBar";

const Inbox = ({ inboxChat }) => {
  const [activeChat, setActiveChat] = useState(false);
  const handleChatNavigation = (val) => {
    setActiveChat(val);
    inboxChat(val);
  };

  return (
    <div className="mt-5">
      <div className=" ml-lg-2 mr-lg-2 mt-5">
        <InboxUpperBar />
        <ChatSide component="Inbox" activeChat={handleChatNavigation} />
      </div>
    </div>
  );
};

export default Inbox;
