import DynamicTable from "components/DynamicTable/DynamicTable";
import { letterWritingHeading } from "mock-data/Data";
import { letterWritingData } from "mock-data/Data";
import React from "react";

function LetterWriting() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Letter Sent <span className="total-transactions">(45)</span>
        </h3>
      </div>
      <DynamicTable
        headings={letterWritingHeading}
        tableData={letterWritingData}
        component="Letter Writing"
      />
    </>
  );
}

export default LetterWriting;
