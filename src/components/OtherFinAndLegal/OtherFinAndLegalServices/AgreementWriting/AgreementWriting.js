import DynamicTable from 'components/DynamicTable/DynamicTable'
import { agreementWritingHeading } from 'mock-data/Data'
import { agreementWritingData } from 'mock-data/Data'
import React from 'react'
function AgreementWriting() {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center mr-lg-3">
      <h3 className="m-4 pages-heading">
       Total Agreement Dragted{" "}
        <span className="total-transactions">(45)</span>
      </h3>
     
    </div>
    <DynamicTable
      headings={agreementWritingHeading}
      tableData={agreementWritingData}
      component="Agreement Writing"
    />
  </>
  )
}

export default AgreementWriting