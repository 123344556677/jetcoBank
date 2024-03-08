import SmallReportsTable from 'components/DynamicTable/SmallReportsTable'
import DynamicBalanceSheetTable from 'components/DynamicTable/StrippedTable'
import { fiscalFinancialReportData } from 'mock-data/Data'
import { fiscalManagementData } from 'mock-data/Data'
import React from 'react'

const FiscalManagementListing = () => {
  return (
    <div className="mr-lg-2">
    <DynamicBalanceSheetTable data={fiscalManagementData}/>
    <SmallReportsTable data={fiscalFinancialReportData}/>
    </div>
  )
}

export default FiscalManagementListing