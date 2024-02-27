import ProfileDocument from "components/ProfileDocument/ProfileDocument";
import ProfileForms from "components/ProfileForm/ProfileForms";
import { notaryData } from "mock-data/ProfileFormData";
import React from "react";
import { Col, Row } from "reactstrap";

const NotaryProfile = () => {
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
        <Row className="w-100">
          <Col xl={7}>
            <ProfileForms formData={notaryData} component="Notary" />
          </Col>
          <Col xl={5} style={{ marginTop: "-5%" }}>
            <ProfileDocument heading="Documents" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NotaryProfile;
