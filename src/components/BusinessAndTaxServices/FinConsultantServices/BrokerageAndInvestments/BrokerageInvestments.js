import DataCards from 'components/DataCards/DataCards'
import SmallReportsTable from 'components/DynamicTable/SmallReportsTable'
import { brokerageRealEstateData } from 'mock-data/Data'
import { brokerageMutualFundsData } from 'mock-data/Data'
import { brokerageBondsData } from 'mock-data/Data'
import { brokerageStockData } from 'mock-data/Data'
import { brokerageInvestmentCardData } from 'mock-data/Data'
import React from 'react'

const BrokerageInvestments = () => {
  return (
    <div>
    <DataCards cardVal={brokerageInvestmentCardData} component="brokerageInvestments"/>
    <SmallReportsTable data={brokerageStockData}/>
    <SmallReportsTable data={brokerageBondsData}/>
    <SmallReportsTable data={brokerageRealEstateData}/>
    <SmallReportsTable data={brokerageMutualFundsData}/>
    </div>
  )
}

export default BrokerageInvestments