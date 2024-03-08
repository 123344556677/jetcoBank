import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import TopSubBar from "components/Users/TopSubBar";
import { creditRepairDisputeHeadings } from "mock-data/Data";
import { creditRepairReviewServicesHeadings } from "mock-data/Data";
import { creditManagementHeadings } from "mock-data/Data";
import { creditManagementData } from "mock-data/Data";
import { creditRepairReviewServicesData } from "mock-data/Data";
import { creditRepairDisputeData } from "mock-data/Data";
import { creditRepairReviewData } from "mock-data/Data";
import { creditRepairReviewHeadings } from "mock-data/Data";
import { creditRepairSubHeadings } from "mock-data/ToBarData";
import { creditManageheadings } from "mock-data/ToBarData";
import React, { useState } from "react";

const CreditManageServices = () => {
  const [activeCouriers, setActiveCourier] = useState();
  const [activesubBarLnk, setActiveSubBarLink] = useState();
  const handleActiveCourierDsipatch = (val) => {
    setActiveCourier(val);
  };
  const handleSubBarActiveLink = (val) => {
    setActiveSubBarLink(val);
  };
  const RenderCreditRepair = () => {
    if (activesubBarLnk === "Credit Review") {
      return (
        <DynamicTable
          headings={creditRepairReviewHeadings}
          tableData={creditRepairReviewData}
          component="Credit Repair Review"
          parentComponent="CreditManagerAndServices"
        />
      );
    }
    if (activesubBarLnk === "Dispute") {
      return (
        <DynamicTable
          headings={creditRepairDisputeHeadings}
          tableData={creditRepairDisputeData}
          component="Credit Repair Dispute"
          parentComponent="CreditManagerAndServices"
        />
      );
    }
    if (activesubBarLnk === "Repair Services") {
      return (
        <DynamicTable
          headings={creditRepairReviewServicesHeadings}
          tableData={creditRepairReviewServicesData}
          component="Credit Repair Review Services"
          parentComponent="CreditManagerAndServices"
        />
      );
    }
    return null;
  };

  const RenderCreditManagement = () => {
    return (
      <DynamicTable
        headings={creditManagementHeadings}
        tableData={creditManagementData}
        component="Credit Management"
        parentComponent="CreditManagerAndServices"
      />
    );
  };

  const MainContent = () => {
    return (
      <div className="mt-3">
        {activeCouriers === "Credit Repair" && <RenderCreditRepair />}
        {activeCouriers === "Credit Management" && <RenderCreditManagement />}
      </div>
    );
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={creditManageheadings}
          buttonValue="no-button"
          checkActiveLink={handleActiveCourierDsipatch}
          defaultValue="Credit Repair"
        />
        {activeCouriers === "Credit Repair" && (
          <TopSubBar
            defaultValue="Credit Review"
            headings={creditRepairSubHeadings}
            checkSubBarActiveLink={handleSubBarActiveLink}
          />
        )}
        <MainContent />
      </div>
    </div>
  );
};

export default CreditManageServices;
