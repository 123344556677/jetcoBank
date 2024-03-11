import DynamicForm from "components/DynamicForm/DynamicForm";
import DynamicTable from "components/DynamicTable/DynamicTable";
import PreviousMessages from "components/Inbox/PreviousMessages";
import TopBar from "components/Users/TopBar";
import { productManagerHeadings } from "mock-data/Data";
import { productNewsTablesHeadings } from "mock-data/Data";
import { previousMessages } from "mock-data/Data";
import { appPromotionsData } from "mock-data/Data";
import { appPromotionsTablesHeadings } from "mock-data/Data";
import { productNewsData } from "mock-data/Data";
import { promotionalUpdatesData } from "mock-data/Data";
import { promotionalUpdatesTablesHeadings } from "mock-data/Data";
import { addContactForm } from "mock-data/FormData";
import { broadcastAndPromotionsHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";

const BroadcastAndPromotions = () => {
  const [activeRole, setActiveRole] = useState();
  const handleActiveRole = (val) => {
    setActiveRole(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={broadcastAndPromotionsHeadings}
          buttonValue={
            activeRole === "Promotional Updates"
              ? "New Promotion"
              : activeRole === "Product News"
              ? "Product News"
              : activeRole === "In-App Promotions"
              ? "In-App Promotions"
              : "no-button"
          }
          checkActiveLink={handleActiveRole}
          defaultValue="Promotional Updates"
          parentComponent="SystemAndSettings"
        />
        <div className="mt-3">
          {activeRole === "Promotional Updates" && (
            <DynamicTable
              headings={promotionalUpdatesTablesHeadings}
              tableData={promotionalUpdatesData}
              component="Promotional Updates"
              parentComponent="SystemAndSettings"
            />
          )}
          {activeRole === "Product News" && (
            <DynamicTable
              headings={productNewsTablesHeadings}
              tableData={productNewsData}
              component="Product News"
              parentComponent="SystemAndSettings"
            />
          )}
          {activeRole === "In-App Promotions" && (
            <DynamicTable
              headings={appPromotionsTablesHeadings}
              tableData={appPromotionsData}
              component="AppPromotions"
              parentComponent="SystemAndSettings"
            />
          )}
          {activeRole === "Broadcast Message" && (
            <>
              <DynamicForm formData={addContactForm} component="Broadcast" />
              <PreviousMessages messagesData={previousMessages} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BroadcastAndPromotions;
