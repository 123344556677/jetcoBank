import React from "react";
import { Button, Form, Input, InputGroup } from "reactstrap";
import "./ProfileForms.css";
import BorderedTable from "components/DynamicTable/BorderedTable";
import { finConsultantProjectData } from "mock-data/Data";
import { finConsultantProjectHeadings } from "mock-data/Data";

const ProfileForms = ({ formData, component }) => {
  return (
    <div>
      <Form className="m-5">
        {formData?.map((data, index) => (
          <InputGroup className="profile-form-input-group mt-3" key={index}>
            <Button className="profile-form-button">{data?.label}</Button>
            <Input
              className="form-control profile-form-input"
              placeholder={data?.placeholder}
              type={data?.type}
            />
          </InputGroup>
        ))}
        {(component === "Agent" || component === "User") && (
          <Button className="login-button mt-4">View Document</Button>
        )}
        {component === "Consultant Services" && (
          <div className="mt-4" style={{width:"70%"}}>
            <BorderedTable tableHeadings={finConsultantProjectHeadings} tableData={finConsultantProjectData} />
          </div>
        )}
        {component !== "Account Detail" && (
          <div
            className={`inline mt-4 ${
              component === "financialInstituition" && "text-center"
            }`}
          >
            <Button
              className="add-button action-button profile-form-action-button  mt-1 mb-5"
              outline
              size="md"
            >
              Edit
            </Button>
            <Button
              className="action-button profile-form-action-button  mt-1 ml-lg-4 mb-5"
              size="md"
              color="danger"
            >
              Delete
            </Button>
            <Button
              className="action-button block-button profile-form-action-button  mt-1 ml-lg-4 mb-5"
              size="md"
            >
              Remove
            </Button>
          </div>
        )}
        <br />
        <br />
      </Form>
    </div>
  );
};

export default ProfileForms;
