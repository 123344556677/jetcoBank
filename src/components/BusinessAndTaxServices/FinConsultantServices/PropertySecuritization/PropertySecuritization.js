import DataCards from "components/DataCards/DataCards";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { propertySecuritizationData } from "mock-data/Data";
import { propertySecuritizationHeadings } from "mock-data/Data";
import { propertySecuritizationCardData } from "mock-data/Data";
import React from "react";

const PropertySecuritization = () => {
  return (
    <div>
      <DataCards cardVal={propertySecuritizationCardData} component="mailbox" />
      <DynamicTable
        headings={propertySecuritizationHeadings}
        tableData={propertySecuritizationData}
        component="propertySecuritization"
        parentComponent="BusinessAndTaxServices"
      />
    </div>
  );
};

export default PropertySecuritization;
