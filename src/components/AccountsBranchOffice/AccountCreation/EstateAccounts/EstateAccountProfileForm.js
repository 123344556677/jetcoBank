import { TrustSettlorData } from "mock-data/ProfileFormData";
import { TrustTrusteeData } from "mock-data/ProfileFormData";
import { TrustBeneficiary1Data } from "mock-data/ProfileFormData";
import { TrustAccountPersonalData } from "mock-data/ProfileFormData";
import { TrustPurposeData } from "mock-data/ProfileFormData";
import React from "react";
import { Button, Form, Input, InputGroup, Label } from "reactstrap";

const EstateAccountProfileForm = () => {
  return (
    <div>
      <Form className="m-5">
        {TrustAccountPersonalData?.map((data, index) => (
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
        <Label className="form-label mt-5">Deceased Information:</Label>
        {TrustSettlorData?.map((data, index) => (
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
        <Label className="form-label mt-5">
          Specify Legal Representative Details:
        </Label>
        {TrustTrusteeData?.map((data, index) => (
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
        <Label className="form-label mt-5">
          Estate's Pupose and Objectives:
        </Label>
        {TrustPurposeData?.map((data, index) => (
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
              defaultValue={data?.defaultValue}
              type={data?.type}
            />
          </InputGroup>
        ))}
        <Label className="form-label mt-5">Beneficiary Details:</Label>
        <h4 className="">Beneficiary 1:</h4>
        {TrustBeneficiary1Data?.map((data, index) => (
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
              defaultValue={data?.defaultValue}
              type={data?.type}
            />
          </InputGroup>
        ))}
        <h4 className="mt-4">Beneficiary 2:</h4>
        {TrustBeneficiary1Data?.map((data, index) => (
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
              defaultValue={data?.defaultValue}
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

export default EstateAccountProfileForm;
