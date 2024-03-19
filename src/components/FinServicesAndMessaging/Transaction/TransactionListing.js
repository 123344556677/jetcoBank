import DynamicTable from 'components/DynamicTable/DynamicTable'
import { transactionTableData } from 'mock-data/Data'
import { transactionTableHeading } from 'mock-data/Data'
import React from 'react'

function TransactionListing() {

  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
    <div className="main-div">
      <br />
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Total Transactions {" "}
        <span className="total-transactions">(54,214)</span>
        </h3>
      
        </div>
        <DynamicTable headings={transactionTableHeading} tableData={transactionTableData} component="Transaction" parentComponent="FinServicesAndMessaging" />
      </div>
    </div>
  )
}

export default TransactionListing