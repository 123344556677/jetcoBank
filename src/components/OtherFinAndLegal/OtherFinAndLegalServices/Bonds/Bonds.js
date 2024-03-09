import DynamicTable from 'components/DynamicTable/DynamicTable'
import { bondsData } from 'mock-data/Data'
import { bondsHeading } from 'mock-data/Data'
import React from 'react'

function Bonds() {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center mr-lg-3">
      <h3 className="m-4 pages-heading">
       Total Bonds Issues{" "}
        <span className="total-transactions">(45)</span>
      </h3>
     
    </div>
    <DynamicTable
      headings={bondsHeading}
      tableData={bondsData}
      component="Bonds"
    />
  </>
 
  )
}

export default Bonds