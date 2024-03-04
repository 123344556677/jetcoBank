import { TrustSettlorData } from "mock-data/ProfileFormData";
import { TrustTrusteeData } from "mock-data/ProfileFormData";
import { TrustPurposeData } from "mock-data/ProfileFormData";
import { TrustAccountData } from "mock-data/ProfileFormData";
import React from "react";
import { Button, Form, Input, InputGroup, Label } from "reactstrap";

const TrustAccountProfileForm = () => {
  return (
    <div>
      <Form className="m-5">
        {TrustAccountData?.map((data, index) => (
          <InputGroup className="profile-form-input-group mt-3" key={index}>
            <Button className="profile-form-button">{data?.label}</Button>
            <Input
              className="form-control profile-form-input"
              placeholder={data?.placeholder}
              type={data?.type}
            />
          </InputGroup>
        ))}
        <Label className="form-label mt-4">Settlor Information:</Label>
        {TrustSettlorData?.map((data, index) => (
          <InputGroup className="profile-form-input-group mt-3" key={index}>
            <Button className="profile-form-button">{data?.label}</Button>
            <Input
              className="form-control profile-form-input"
              placeholder={data?.placeholder}
              type={data?.type}
            />
          </InputGroup>
        ))}
        <Label className="form-label mt-4">Specify Trustee Details:</Label>
        {TrustTrusteeData?.map((data, index) => (
          <InputGroup className="profile-form-input-group mt-3" key={index}>
            <Button className="profile-form-button">{data?.label}</Button>
            <Input
              className="form-control profile-form-input"
              placeholder={data?.placeholder}
              type={data?.type}
            />
          </InputGroup>
        ))}
        <Label className="form-label mt-4">Trusts Pupose and Objectives:</Label>
        {TrustPurposeData?.map((data, index) => (
          <InputGroup className="profile-form-input-group mt-3" key={index}>
            <Button className={data?.type==="textarea"}>{data?.label}</Button>
            <Input
              className="form-control profile-form-input"
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

export default TrustAccountProfileForm;
