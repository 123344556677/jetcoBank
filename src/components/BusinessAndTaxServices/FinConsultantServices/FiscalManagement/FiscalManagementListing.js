import DynamicBalanceSheetTable from 'components/DynamicTable/StrippedTable'
import { fiscalManagementData } from 'mock-data/Data'
import React from 'react'

const FiscalManagementListing = () => {
  return (
    <div className="mr-lg-2">
    <DynamicBalanceSheetTable data={fiscalManagementData}/>
    </div>
  )
}

export default FiscalManagementListing