import DataCards from "components/DataCards/DataCards";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { retirementPlansHeadings } from "mock-data/Data";
import { retirementPlansData } from "mock-data/Data";
import { retirementPlansCardData } from "mock-data/Data";
import React from "react";

const RetirementPlans = () => {
  return (
    <div>
      <DataCards cardVal={retirementPlansCardData} component="mailbox" />
      <DynamicTable
        headings={retirementPlansHeadings}
        tableData={retirementPlansData}
        component="RetirementPlans"
        parentComponent="BusinessAndTaxServices"
      />
    </div>
  );
};

export default RetirementPlans;
