import { finAndLegalTopBar } from "mock-data/Data";
import React, { useState } from "react";
import InvestigativeAudits from "./Investigative Audits/InvestigativeAudits";
import AccountTopBar from "components/AccountsBranchOffice/AccountTopBar";

function OtherFinAndLegalServicesListing() {
  const [accountVal, setAccountVal] = useState();
  const handleAccountValue = (val) => {
    setAccountVal(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ">
      <AccountTopBar
        accountValue={handleAccountValue}
        defaultValue="Investigative Audits"
        barData={finAndLegalTopBar}
      />
      <div className="main-div mt-3 ml-lg-2 mr-lg-2">
        <br />
        {accountVal?.component ? (
          accountVal?.component
        ) : (
          <InvestigativeAudits />
        )}
      </div>
    </div>
  );
}

export default OtherFinAndLegalServicesListing;
