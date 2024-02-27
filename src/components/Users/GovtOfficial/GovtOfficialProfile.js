import ProfileForms from "components/ProfileForm/ProfileForms";
import { govtOfficialData } from "mock-data/ProfileFormData";
import React from "react";

const GovtOfficialProfile = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div ">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <img
            className="profile-img ml-5 mt-3"
            src={require("../../../assets/img/theme/team-4-800x800.jpg")}
            alt="profile"
          />
        </div>
        <ProfileForms formData={govtOfficialData} component="GovtOfficial" />
      </div>
    </div>
  );
};

export default GovtOfficialProfile;
