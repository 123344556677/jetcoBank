import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { ledgerTableTableData } from "mock-data/Data";
import { cardManagementTableHeading } from "mock-data/Data";
import { cardManagementTableHeadingsData } from "mock-data/Data";
import { ledgerTableTableDataCredit } from "mock-data/Data";
import { ledgerTableHeading } from "mock-data/Data";
import { cardManagementHeadings } from "mock-data/ToBarData";
import { ledgerListingHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";
function CardManagementListing() {
  const [CardManagement, setCardManagement] = useState();
  const handleActiveCardManagement = (val) => {
    setCardManagement(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={cardManagementHeadings}
          buttonValue="Prepaid Caard"
          checkActiveLink={handleActiveCardManagement}
          defaultValue="Prepaid Card"
          parentComponent="FinServicesAndMessaging"
        />
        <div className="mt-3">
          {CardManagement === "Prepaid Card" && (
            <DynamicTable
              headings={cardManagementTableHeading}
              tableData={cardManagementTableHeadingsData}
              component="CardManagementListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {CardManagement === "Virtual Card" && (
            <DynamicTable
              headings={cardManagementTableHeading}
              tableData={cardManagementTableHeadingsData}
              component="CardManagementListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
          {CardManagement === "Physical Card" && (
            <DynamicTable
              headings={cardManagementTableHeading}
              tableData={cardManagementTableHeadingsData}
              component="CardManagementListing"
              parentComponent="FinServicesAndMessaging"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardManagementListing;
