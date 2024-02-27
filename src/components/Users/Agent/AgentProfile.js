import React, { useState } from "react";
import ProfileBar from "../ProfileBar";
import ProfileForms from "components/ProfileForm/ProfileForms";
import { agentData } from "mock-data/ProfileFormData";
import CustomHeaderCards from "components/CustomHeaderCards/CustomHeaderCards";
import { cardData } from "mock-data/Data";
import { agentAccountData } from "mock-data/ProfileFormData";

const AgentProfile = () => {
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
            src={require("../../../assets/img/theme/team-4-800x800.jpg")}
            alt="profile"
          />
          <ProfileBar
            value={["Personal Detail", "Account Detail"]}
            defaultValue="Personal Detail"
            component={handleProfileBarValue}
          />
        </div>
        {activeProfileBarComponent === "Personal Detail" && (
          <ProfileForms formData={agentData} component="Agent" />
        )}
        {activeProfileBarComponent === "Account Detail" && (
          <>
            <CustomHeaderCards cardValues={cardData} />
            <ProfileForms
              formData={agentAccountData}
              component="Agent Account"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;
