import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { officialDocumentHandlingHeadings } from "mock-data/Data";
import { officialDocumentAuthenticationHeadings } from "mock-data/Data";
import { officialDocumentApostileHeadings } from "mock-data/Data";
import { processServingHeadings } from "mock-data/Data";
import { documentRegistrationHeadings } from "mock-data/Data";
import { documentRegistrationData } from "mock-data/Data";
import { processServingData } from "mock-data/Data";
import { officialDocumentApostileData } from "mock-data/Data";
import { officialDocumentAuthenticationData } from "mock-data/Data";
import { officialDocumentHandlingData } from "mock-data/Data";
import { officialServicesHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";

const OfficialServicesListing = () => {
  const [activeRole, setActiveRole] = useState();
  const handleActiveRole = (val) => {
    setActiveRole(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={officialServicesHeadings}
          buttonValue={
            activeRole === "Document Registration" ? "Document" : "no-button"
          }
          checkActiveLink={handleActiveRole}
          defaultValue="Official Document Handling"
          parentComponent="OtherFinAndLegal"
        />
        <div className="mt-3">
          {activeRole === "Official Document Handling" && (
            <DynamicTable
              headings={officialDocumentHandlingHeadings}
              tableData={officialDocumentHandlingData}
              component="documentHanling"
              parentComponent="OtherFinAndLegal"
            />
          )}
          {activeRole === "Document Authentication" && (
            <DynamicTable
              headings={officialDocumentAuthenticationHeadings}
              tableData={officialDocumentAuthenticationData}
              component="documentAthenticationHanling"
              parentComponent="OtherFinAndLegal"
            />
          )}
          {activeRole === "Document Apostille" && (
            <DynamicTable
              headings={officialDocumentApostileHeadings}
              tableData={officialDocumentApostileData}
              component="documentApostileHanling"
              parentComponent="OtherFinAndLegal"
            />
          )}
          {activeRole === "Process Serving" && (
            <DynamicTable
              headings={processServingHeadings}
              tableData={processServingData}
              component="processServing"
              parentComponent="OtherFinAndLegal"
            />
          )}
          {activeRole === "Document Registration" && (
            <DynamicTable
              headings={documentRegistrationHeadings}
              tableData={documentRegistrationData}
              component="documentRegistration"
              parentComponent="OtherFinAndLegal"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficialServicesListing;
