import { autoLoanPersonalVehicleData } from "mock-data/ProfileFormData";
import { autoLoanPersonalData } from "mock-data/ProfileFormData";
import React from "react";
import { Button, Form, Input, InputGroup, Label } from "reactstrap";

const AutoLoanAccountProfileForm = () => {
  return (
    <div>
      <Form className="m-5">
        {autoLoanPersonalData?.map((data, index) => (
          <InputGroup className="profile-form-input-group mt-3" key={index}>
            <Button
              className={
                data?.type === "textarea"
                  ? "profile-form-description-button"
                  : "profile-form-button"
              }
            >
              {data?.label}
            </Button>
            <Input
              className={
                data?.type === "textarea"
                  ? "form-control profile-form-description"
                  : "form-control profile-form-input"
              }
              placeholder={data?.placeholder}
              type={data?.type}
            />
          </InputGroup>
        ))}
        <Label className="form-label mt-4">Vehicle Details:</Label>
        {autoLoanPersonalVehicleData?.map((data, index) => (
          <InputGroup className="profile-form-input-group mt-3" key={index}>
            <Button
              className={
                data?.type === "textarea"
                  ? "profile-form-description-button"
                  : "profile-form-button"
              }
            >
              {data?.label}
            </Button>
            <Input
              className={
                data?.type === "textarea"
                  ? "form-control profile-form-description"
                  : "form-control profile-form-input"
              }
              placeholder={data?.placeholder}
              type={data?.type}
            />
          </InputGroup>
        ))}
        <div className="inline mt-4">
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
        <br />
        <br />
      </Form>
    </div>
  );
};

export default AutoLoanAccountProfileForm;
