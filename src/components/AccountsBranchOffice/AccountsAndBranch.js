import DataCards from 'components/DataCards/DataCards'
import { accountOfficeData } from 'mock-data/Data'
import React from 'react'

const AccountsAndBranch = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <DataCards cardVal={accountOfficeData} />
    </div>
  )
}

export default AccountsAndBranch