import React, { useState } from "react";
import "../AccountAndBranch.css";
import AccountTopBar from "../AccountTopBar";
import CheckingAccounts from "./CheckingAccounts/CheckingAccounts";

const AccountCreationListing = () => {
  const [accountVal, setAccountVal] = useState();
  const handleAccountValue = (val) => {
    setAccountVal(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ">
      <AccountTopBar
        accountValue={handleAccountValue}
        defaultValue="Checking Accounts"
      />
      <div className="main-div mt-3 ml-lg-2 mr-lg-2">
        <br />
        {accountVal?.component ? accountVal?.component : <CheckingAccounts />}
      </div>
    </div>
  );
};

export default AccountCreationListing;
