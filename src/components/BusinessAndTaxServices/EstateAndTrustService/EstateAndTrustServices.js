import DynamicForm from "components/DynamicForm/DynamicForm";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { trusteeServicesHeadings } from "mock-data/Data";
import { estatePlanningData } from "mock-data/Data";
import { estateLastWillHeadings } from "mock-data/Data";
import { estateAncestoryHeadings } from "mock-data/Data";
import { estateAncestoryData } from "mock-data/Data";
import { estateForensicData } from "mock-data/Data";
import { estateForensicHeadings } from "mock-data/Data";
import { estateLastWillData } from "mock-data/Data";
import { estatePlanningHeadings } from "mock-data/Data";
import { trusteeServicesData } from "mock-data/Data";
import { createEstateTrustInformationForm } from "mock-data/FormData";
import { estateAndTrustheadings } from "mock-data/ToBarData";
import React, { useState } from "react";
import WealthManagement from "./WealthManagement";

const EstateAndTrustServices = () => {
  const [activeRole, setActiveRole] = useState();
  const handleActiveRole = (val) => {
    setActiveRole(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={estateAndTrustheadings}
          checkActiveLink={handleActiveRole}
          buttonValue={activeRole==="Trustee Services"?"Trustee":activeRole==="Estate Planning"?"Estate Plan":"no-button"}
          defaultValue="Trust Formation"
          component="EstateAndTrustServices"
          parentComponent="Business And Tax Services"
        />
        <div className="mt-3">
          {activeRole === "Trust Formation" && (
            <DynamicForm
              formData={createEstateTrustInformationForm}
              component="Trust Formation"
              buttonValue="Create Trust Formation"
            />
          )}
          {activeRole === "Trustee Services" && (
            <DynamicTable
              headings={trusteeServicesHeadings}
              tableData={trusteeServicesData}
              component="Trustee Services"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Wealth Management" && (
            <WealthManagement/>
          )}
          {activeRole === "Estate Planning" && (
            <DynamicTable
              headings={estatePlanningHeadings}
              tableData={estatePlanningData}
              component="Estate Planning"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Last Will & Testament" && (
            <DynamicTable
              headings={estateLastWillHeadings}
              tableData={estateLastWillData}
              component="Estate Last Will"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Ancestary Estate Research" && (
            <DynamicTable
              headings={estateAncestoryHeadings}
              tableData={estateAncestoryData}
              component="Estate Ancestary"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Forensic Treasure Hunt" && (
            <DynamicTable
              headings={estateForensicHeadings}
              tableData={estateForensicData}
              component="Forensic Data"
              parentComponent="BusinessAndTaxServices"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EstateAndTrustServices;
