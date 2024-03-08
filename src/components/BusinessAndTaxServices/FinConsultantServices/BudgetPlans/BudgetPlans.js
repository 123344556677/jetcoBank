import DataCards from 'components/DataCards/DataCards'
import DynamicTable from 'components/DynamicTable/DynamicTable'
import { budgetPlansData } from 'mock-data/Data'
import { budgetPlansHeadings } from 'mock-data/Data'
import { budgetPlansCardData } from 'mock-data/Data'
import React from 'react'

const BudgetPlans = () => {
  return (
    <div>
      <DataCards cardVal={budgetPlansCardData} component="mailbox" />
      <DynamicTable
        headings={budgetPlansHeadings}
        tableData={budgetPlansData}
        component="BudgetPlans"
        parentComponent="BusinessAndTaxServices"
      />
    </div>
  )
}

export default BudgetPlans