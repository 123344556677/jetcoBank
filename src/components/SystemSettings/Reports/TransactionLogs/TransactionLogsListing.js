import DynamicTable from 'components/DynamicTable/DynamicTable'
import { transactionLogsData } from 'mock-data/Data'
import { transactionLogsHeadings } from 'mock-data/Data'
import React from 'react'
function TransactionLogsListing() {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center mr-lg-3">
      <h3 className="m-4 pages-heading">
        Transaction Logs{" "}
       
      </h3>
    </div>
    <DynamicTable
      headings={transactionLogsHeadings}
      tableData={transactionLogsData}
      component="Transaction Logs"
    />
  </>
  )
}

export default TransactionLogsListing