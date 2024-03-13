import CheckingAccounts from 'components/AccountsBranchOffice/AccountCreation/CheckingAccounts/CheckingAccounts';
import AccountTopBar from 'components/AccountsBranchOffice/AccountTopBar'
import { appSettingsTopBar } from 'mock-data/Data';
import React, { useState } from 'react'
import CustomizeUserDisplayListing from './CustomizeUserDisplay/CustomizeUserDisplayListing';

const AppSettings = () => {
    const [accountVal, setAccountVal] = useState();
  const handleAccountValue = (val) => {
    setAccountVal(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ">
      <AccountTopBar
        accountValue={handleAccountValue}
        defaultValue="Customize User Display Settings"
        barData={appSettingsTopBar}
      />
      <div className="main-div mt-3 ml-lg-2 mr-lg-2">
        <br />
        {accountVal?.component ? accountVal?.component : <CustomizeUserDisplayListing/>}
      </div>
    </div>
  )
}

export default AppSettings