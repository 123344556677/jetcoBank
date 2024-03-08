import Chat from "components/Chat/Chat";
import DynamicTable from "components/DynamicTable/DynamicTable";
import StrippedTable from "components/DynamicTable/StrippedTable";
import Inbox from "components/Inbox/Inbox";
import TopBar from "components/Users/TopBar";
import { taxFilingPreparationHeadings } from "mock-data/Data";
import { taxReturnData } from "mock-data/Data";
import { taxFilingInformationHeadings } from "mock-data/Data";
import { taxFilingInformationData } from "mock-data/Data";
import { taxFilingPreparationData } from "mock-data/Data";
import { eFilingData } from "mock-data/Data";
import { eFilingHeadings } from "mock-data/Data";
import { taxFilingServicesheadings } from "mock-data/ToBarData";
import React, { useState } from "react";
import AddTaxFilingPlanningForm from "./AddTaxFilingPlanningForm";

const TaxFilingServices = () => {
  const [activeRole, setActiveRole] = useState();
  const [activeChat, setActiveChat] = useState(false);
  const handleActiveRole = (val) => {
    setActiveRole(val);
  };
  const handleChatNavigation = (val) => {
    setActiveChat(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={taxFilingServicesheadings}
          checkActiveLink={handleActiveRole}
          buttonValue="e-filing"
          defaultValue="E-Filing"
          parentComponent="BusinessAndTaxServices"
        />
        <div className="mt-3">
          {activeRole === "E-Filing" && (
            <DynamicTable
              headings={eFilingHeadings}
              tableData={eFilingData}
              component="E-Filing"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Planning" && <AddTaxFilingPlanningForm />}
          {activeRole === "Tax Returns" && (
            <StrippedTable data={taxReturnData} />
          )}
          {activeRole === "Preparation" && (
            <DynamicTable
              headings={taxFilingPreparationHeadings}
              tableData={taxFilingPreparationData}
              component="TaxFilingPreparation"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Information" && (
            <DynamicTable
              headings={taxFilingInformationHeadings}
              tableData={taxFilingInformationData}
              component="Tax Filing Information"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Assistance" &&
            (activeChat ? (
              <Chat />
            ) : (
              <Inbox inboxChat={handleChatNavigation} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaxFilingServices;
