import DynamicTable from "components/DynamicTable/DynamicTable";
import ProfileForms from "components/ProfileForm/ProfileForms";
import ProfileBar from "components/Users/ProfileBar";
import { passThroughData } from "mock-data/Data";
import { passThroughHeadings } from "mock-data/Data";
import { passThroughPersonalData } from "mock-data/ProfileFormData";
import { passThroughAccountData } from "mock-data/ProfileFormData";
import React, { useState } from "react";

const PassThroughProfile = () => {
  const [activeProfileBarComponent, setProfileBarComponent] = useState();
  const handleProfileBarValue = (data) => {
    setProfileBarComponent(data);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div ">
        <br />
        <div className=" mt-4 d-flex flex-column flex-md-row align-items-center">
          {activeProfileBarComponent === "Personal Detail" && (
            <img
              className="profile-img ml-5 mt-3"
              src={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              alt="profile"
            />
          )}
          <ProfileBar
            value={["Personal Detail", "Transaction Detail", "Account Detail"]}
            defaultValue="Instituition Detail"
            component={handleProfileBarValue}
          />
        </div>
        {activeProfileBarComponent === "Personal Detail" && (
          <ProfileForms
            formData={passThroughPersonalData}
            component="Pass Through Account"
          />
        )}
        {activeProfileBarComponent === "Transaction Detail" && (
          <>
            <div className="transaction-bar d-flex justify-content-between align-items-center mr-lg-1">
              <h3 className="m-4 pages-heading">Total Transactions Amount</h3>
              <h2 className="mr-2">
                $54,214 <span className="total-transactions">(54)</span>
              </h2>
            </div>
            <DynamicTable
              headings={passThroughHeadings}
              tableData={passThroughData}
              component="Pass Through Account"
            />
          </>
        )}
        {activeProfileBarComponent === "Account Detail" && (
          <ProfileForms
            formData={passThroughAccountData}
            component="Pass Through Account"
          />
        )}
      </div>
    </div>
  );
};

export default PassThroughProfile;
