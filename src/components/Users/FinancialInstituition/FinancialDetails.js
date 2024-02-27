import ProfileForms from "components/ProfileForm/ProfileForms";
import React, { useState } from "react";
import ProfileBar from "../ProfileBar";
import { financialInstituitionData } from "mock-data/ProfileFormData";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { transactionHeadings } from "mock-data/Data";
import { transactionData } from "mock-data/Data";
import { accountDetailData } from "mock-data/ProfileFormData";

const FinancialDetails = () => {
  const [activeProfileBarComponent, setProfileBarComponent] = useState();
  const handleProfileBarValue = (data) => {
    setProfileBarComponent(data);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div ">
        <br />
        <div className=" mt-4 d-flex flex-column flex-md-row align-items-center">
          <ProfileBar
            value={[
              "Instituition Detail",
              "Transaction Detail",
              "Account Detail",
            ]}
            defaultValue="Instituition Detail"
            component={handleProfileBarValue}
          />
        </div>
        {activeProfileBarComponent === "Instituition Detail" && (
          <ProfileForms
            formData={financialInstituitionData}
            component="financialInstituition"
          />
        )}
        {activeProfileBarComponent === "Transaction Detail" && (
          <>
            <div className="transaction-bar d-flex justify-content-between align-items-center mr-lg-1">
              <h3 className="m-4 pages-heading">Total Transaction Amount</h3>
              <h2 className="mr-2">
                $54,214 <span className="total-transactions">(54)</span>
              </h2>
            </div>
            <DynamicTable
              headings={transactionHeadings}
              tableData={transactionData}
              component="Transaction Detail"
            />
          </>
        )}
        {activeProfileBarComponent === "Account Detail" && (
          <ProfileForms
            formData={accountDetailData}
            component="Account Detail"
          />
        )}
      </div>
    </div>
  );
};

export default FinancialDetails;
