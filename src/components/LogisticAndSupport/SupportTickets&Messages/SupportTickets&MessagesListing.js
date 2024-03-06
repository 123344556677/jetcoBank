import Chat from "components/Chat/Chat";
import DataCards from "components/DataCards/DataCards";
import DynamicForm from "components/DynamicForm/DynamicForm";
import DynamicTable from "components/DynamicTable/DynamicTable";
import Inbox from "components/Inbox/Inbox";
import TopBar from "components/Users/TopBar";
import { supportTicketsHeadings } from "mock-data/Data";
import { supportTicketsData } from "mock-data/Data";
import { shippingTicketsMessagestData } from "mock-data/Data";
import { createTicketForm } from "mock-data/FormData";
import { supportTicketsMessagesHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";

const SupportTicketsMessagesListing = () => {
  const [supportTickets, setSupportTickets] = useState();
  const [activeChat, setActiveChat] = useState(false);
  const handleActiveSupportTickets = (val) => {
    setSupportTickets(val);
  };

  const handleChatNavigation = (val) => {
    setActiveChat(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <DataCards cardVal={shippingTicketsMessagestData} />
      <div className="main-div mr-lg-2 ml-lg-2">
        <br />
        <TopBar
          headings={supportTicketsMessagesHeadings}
          buttonValue="Ticket"
          checkActiveLink={handleActiveSupportTickets}
          defaultValue="Support Tickets"
        />
        {supportTickets === "Support Tickets" && (
          <DynamicTable
            headings={supportTicketsHeadings}
            tableData={supportTicketsData}
            component="ShippingListingTrack"
            parentComponent="LogisticsAndSupport"
          />
        )}
        {supportTickets === "Messaging" &&
          (activeChat ? <Chat /> : <Inbox inboxChat={handleChatNavigation} />)}

          {supportTickets === "Initiate Support Ticket" && (
          <DynamicForm
              formData={createTicketForm}
              component="Initiate Support Ticket"
              buttonValue="Create Ticket"
            />
        )}

        <br />
      </div>
    </div>
  );
};

export default SupportTicketsMessagesListing;
