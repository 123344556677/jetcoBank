import DynamicTable from 'components/DynamicTable/DynamicTable'
import { healthSavingData } from 'mock-data/Data'
import { healthSavingHeadings } from 'mock-data/Data'
import React from 'react'

const HealthSavingAccount = () => {
  return (
    <div>
    <DynamicTable
        headings={healthSavingHeadings}
        tableData={healthSavingData}
        component="healthSavingAccount"
        parentComponent="BusinessAndTaxServices"
      />
    </div>
  )
}

export default HealthSavingAccount