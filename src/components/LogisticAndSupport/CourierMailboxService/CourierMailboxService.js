import DataCards from "components/DataCards/DataCards";
import DynamicForm from "components/DynamicForm/DynamicForm";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import TopSubBar from "components/Users/TopSubBar";
import { shippingCourierData } from "mock-data/Data";
import { courierDeliveredData } from "mock-data/Data";
import { shippingMailBoxHeadings } from "mock-data/Data";
import { mailboxServiceData } from "mock-data/Data";
import { shippingMailboxData } from "mock-data/Data";
import { CourierDeliveredHeadings } from "mock-data/Data";
import { shippingCourierHeadings } from "mock-data/Data";
import { createMailCancelForm } from "mock-data/FormData";
import { createMailRenewalForm } from "mock-data/FormData";
import { createMailSetupForm } from "mock-data/FormData";
import { mailboxSubheadings } from "mock-data/ToBarData";
import { courierSubheadings } from "mock-data/ToBarData";
import { courierMailboxServiceHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";

const CourierMailboxService = () => {
  const [activeCouriers, setActiveCourier] = useState();
  const [activesubBarLnk, setActiveSubBarLink] = useState();
  const handleActiveCourierDsipatch = (val) => {
    setActiveCourier(val);
  };
  const handleSubBarActiveLink = (val) => {
    setActiveSubBarLink(val);
  };
  const RenderCourierContent = () => {
    if (activesubBarLnk === "Active") {
      return (
        <DynamicTable
          headings={shippingCourierHeadings}
          tableData={shippingCourierData}
          component="Courier Service"
          parentComponent="LogisticAndSupport"
        />
      );
    }
    if (activesubBarLnk === "Delivered") {
      return (
        <DynamicTable
          headings={CourierDeliveredHeadings}
          tableData={courierDeliveredData}
          component="Courier Service"
          parentComponent="LogisticAndSupport"
        />
      );
    }
    return null;
  };

  const RenderMailboxContent = () => {
    switch (activesubBarLnk) {
      case "Setup":
        return (
          <DynamicForm
            formData={createMailSetupForm}
            component="Mailbox Setup"
            buttonValue="Setup Now"
          />
        );
      case "Cancel":
        return (
          <DynamicForm
            formData={createMailCancelForm}
            component="Mailbox Cancel"
            buttonValue="Confirm Cancellation"
          />
        );
      case "Renew Mailbox":
        return (
          <DynamicForm
            formData={createMailRenewalForm}
            component="Mailbox Renewal"
            buttonValue="Renew! Now"
          />
        );
      default:
        return (
          <>
            <DataCards cardVal={mailboxServiceData} component="mailbox" />
            <DynamicTable
              headings={shippingMailBoxHeadings}
              tableData={shippingMailboxData}
              component="Mailbox Service"
              parentComponent="LogisticAndSupport"
            />
          </>
        );
    }
  };

  const MainContent = () => {
    return (
      <div className="mt-3">
        {activeCouriers === "Courier" && <RenderCourierContent />}
        {activeCouriers === "Mailbox Service" && <RenderMailboxContent />}
      </div>
    );
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={courierMailboxServiceHeadings}
          buttonValue="no-button"
          checkActiveLink={handleActiveCourierDsipatch}
          defaultValue="Courier"
        />
        {activeCouriers === "Courier" && (
          <TopSubBar
            defaultValue="Active"
            headings={courierSubheadings}
            checkSubBarActiveLink={handleSubBarActiveLink}
          />
        )}
        {activeCouriers === "Mailbox Service" && (
          <TopSubBar
            headings={mailboxSubheadings}
            checkSubBarActiveLink={handleSubBarActiveLink}
          />
        )}
        <MainContent />
      </div>
    </div>
  );
};

export default CourierMailboxService;
