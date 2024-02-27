import ProfileDocument from "components/ProfileDocument/ProfileDocument";
import ProfileForms from "components/ProfileForm/ProfileForms";
import { contractorData } from "mock-data/ProfileFormData";
import React from "react";
import { Col, Row } from "reactstrap";

const ContractorProfile = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div ">
        <div className="d-flex flex-column flex-md-row ">
          <img
            className="profile-img ml-5 mt-3"
            src={require("../../../assets/img/theme/team-4-800x800.jpg")}
            alt="profile"
          />
        </div>
        <Row className="w-100">
          <Col xl={7}>
            <ProfileForms formData={contractorData} component="Contractor" />
          </Col>
          <Col xl={5} style={{ marginTop: "-5%" }}>
            <ProfileDocument heading="Contractor Documents" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContractorProfile;
