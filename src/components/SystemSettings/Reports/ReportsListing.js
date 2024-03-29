import { reportsTopBar } from 'mock-data/Data';
import React, { useState } from 'react'
import FINCENSingleReportListing from './FINCENSingleReport/FINCENSingleReportListing';
import AccountTopBar from 'components/AccountsBranchOffice/AccountTopBar';
function ReportsListing() {
    const [accountVal, setAccountVal] = useState();
    const handleAccountValue = (val) => {
      setAccountVal(val);
    };
  return (
    <div className="pt-5 pt-md-8 mb-3 ">
    <AccountTopBar
      accountValue={handleAccountValue}
      defaultValue="FinCEN Report"
      barData={reportsTopBar}
    />
    <div className="main-div mt-3 ml-lg-2 mr-lg-2">
      <br />
      {accountVal?.component ? (
        accountVal?.component
      ) : (
        <FINCENSingleReportListing/>
      )}
    </div>
  </div>
  )
}

export default ReportsListing