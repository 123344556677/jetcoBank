import CustomHeaderCards from "components/CustomHeaderCards/CustomHeaderCards";
import ProfileForms from "components/ProfileForm/ProfileForms";
import ProfileBar from "components/Users/ProfileBar";
import { cardData } from "mock-data/Data";
import { notForProfitAccountPersonalData } from "mock-data/ProfileFormData";
import { notForProfitAccountData } from "mock-data/ProfileFormData";
import React, { useState } from "react";

const NotForProfitAccountProfile = () => {
  const [activeProfileBarComponent, setProfileBarComponent] = useState();
  const handleProfileBarValue = (data) => {
    setProfileBarComponent(data);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div ">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <img
            className="profile-img ml-5 mt-3"
            src={require("../../../../assets/img/theme/team-4-800x800.jpg")}
            alt="profile"
          />
          <ProfileBar
            value={["Personal Detail", "Account Detail"]}
            defaultValue="Personal Detail"
            component={handleProfileBarValue}
          />
        </div>
        {activeProfileBarComponent === "Account Detail" && (
          <>
            <CustomHeaderCards
              cardValues={cardData}
              component="Not For Profit Account"
            />
            <ProfileForms
              formData={notForProfitAccountData}
              component="Not For ProfitAccount"
            />
          </>
        )}
        {activeProfileBarComponent === "Personal Detail" && (
          <ProfileForms
            formData={notForProfitAccountPersonalData}
            component="Prepaid Account"
          />
        )}
      </div>
    </div>
  );
};

export default NotForProfitAccountProfile;
