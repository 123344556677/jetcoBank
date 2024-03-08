import { taxFilePreparationIncomeDetailData } from "mock-data/ProfileFormData";
import { taxFilePreparationDeductionsData } from "mock-data/ProfileFormData";
import { taxFilePreparationTaxLiabilityData } from "mock-data/ProfileFormData";
import { taxFilePreparationBankInfoData } from "mock-data/ProfileFormData";
import { taxFilePreparationTaxData } from "mock-data/ProfileFormData";
import { taxFilePreparationPersonalData } from "mock-data/ProfileFormData";
import React from "react";
import { Button, Form, Input, InputGroup, Label } from "reactstrap";

const TaxFilingPreparationProfileForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <img
            className="profile-img ml-5 mt-3"
            src={require("../../../assets/img/theme/team-4-800x800.jpg")}
            alt="profile"
          />
        </div>
        <Form className="m-4">
          <Label className="form-label mt-5">Pesonal Detail</Label>
          {taxFilePreparationPersonalData?.map((data, index) => (
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
          <Label className="form-label mt-5">Income Details:</Label>
          {taxFilePreparationIncomeDetailData?.map((data, index) => (
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
          <Label className="form-label mt-5">Deductions:</Label>
          {taxFilePreparationDeductionsData?.map((data, index) => (
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
          <Label className="form-label mt-5">Tax Credits:</Label>
          {taxFilePreparationTaxData?.map((data, index) => (
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
          <Label className="form-label mt-5">Tax Liability:</Label>
          {taxFilePreparationTaxLiabilityData?.map((data, index) => (
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
          <Label className="form-label mt-5">Bank Information:</Label>
          {taxFilePreparationBankInfoData?.map((data, index) => (
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
    </div>
  );
};

export default TaxFilingPreparationProfileForm;
