import FormTopBar from "components/Users/FormTopBar";
import { createTrustSettlorForm } from "mock-data/FormData";
import { createTrustPurposeForm } from "mock-data/FormData";
import { createTrustBeneficiary1Form } from "mock-data/FormData";
import { createTrustDurationForm } from "mock-data/FormData";
import { createTrustTrusteeForm } from "mock-data/FormData";
import { createTrustForm } from "mock-data/FormData";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const AddEstateAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Create Estate Accounts" />
        <Form className="m-4">
          {createTrustForm?.map((data, index) => (
            <FormGroup key={index}>
              <Label className={data.name !== "message" && "form-label"}>
                {data.label}
              </Label>
              <Input
                type={data.type}
                name={data.name}
                defaultValue={data.defaultValue}
                placeholder={data.placeholder}
                value={data.value}
                className={`form-control login-input form-input ${
                  data.type === "textarea" ? "description-input p-4" : "p-4"
                }`}
                required
              />
            </FormGroup>
          ))}
          <Label className="form-label">Add Estate Detail:</Label>
          <div className="main-div">
            <div className="m-2">
              <br />
              <h4 className="">Add Deceased Information:</h4>
              <br />
              {createTrustSettlorForm?.map((data, index) => (
                <FormGroup key={index}>
                  <Label className={data.name !== "message" && "form-label"}>
                    {data.label}
                  </Label>
                  <Input
                    type={data.type}
                    name={data.name}
                    defaultValue={data.defaultValue}
                    placeholder={data.placeholder}
                    value={data.value}
                    className={`form-control login-input form-input ${
                      data.type === "textarea" ? "description-input p-4" : "p-4"
                    }`}
                    required
                  />
                </FormGroup>
              ))}
            </div>
            <br />
          </div>
          <div className="main-div mt-4">
            <div className="m-2">
              <br />
              <h4 className="">Specify Legal Representative Detail:</h4>
              <br />
              {createTrustTrusteeForm.map((data, index) => (
                <FormGroup key={index}>
                  <Label className={data.name !== "message" && "form-label"}>
                    {data.label}
                  </Label>
                  <Input
                    type={data.type}
                    name={data.name}
                    defaultValue={data.defaultValue}
                    placeholder={data.placeholder}
                    value={data.value}
                    className={`form-control login-input form-input ${
                      data.type === "textarea" ? "description-input p-4" : "p-4"
                    }`}
                    required
                  />
                </FormGroup>
              ))}
            </div>
            <br />
          </div>
          <div className="main-div mt-4">
            <div className="m-2">
              <br />
              <h4 className="">Define the Estate Purpose and Objectives:</h4>
              <br />
              {createTrustPurposeForm.map((data, index) => (
                <FormGroup key={index}>
                  <Label className={data.name !== "message" && "form-label"}>
                    {data.label}
                  </Label>
                  <Input
                    type={data.type}
                    name={data.name}
                    defaultValue={data.defaultValue}
                    placeholder={data.placeholder}
                    value={data.value}
                    className={`form-control login-input form-input ${
                      data.type === "textarea" ? "description-input p-4" : "p-4"
                    }`}
                    required
                  />
                </FormGroup>
              ))}
            </div>
            <br />
          </div>
          <div className="main-div mt-4">
            <div className="m-2">
              <br />
              <h4 className="">Set the Duration of the Trust:</h4>
              <br />
              {createTrustDurationForm.map((data, index) => (
                <FormGroup key={index}>
                  <Label className={data.name !== "message" && "form-label"}>
                    {data.label}
                  </Label>
                  <Input
                    type={data.type}
                    name={data.name}
                    defaultValue={data.defaultValue}
                    placeholder={data.placeholder}
                    value={data.value}
                    className={`form-control login-input form-input ${
                      data.type === "textarea" ? "description-input p-4" : "p-4"
                    }`}
                    required
                  />
                </FormGroup>
              ))}
            </div>
            <br />
          </div>
          <div className="main-div mt-4">
            <div className="m-2">
              <br />
              <h4 className="">Add Beneficiary Detail:</h4>
              <h4 className="">Beneficiary 1:</h4>
              <br />
              {createTrustBeneficiary1Form.map((data, index) => (
                <FormGroup key={index}>
                  <Label className={data.name !== "message" && "form-label"}>
                    {data.label}
                  </Label>
                  <Input
                    type={data.type}
                    name={data.name}
                    defaultValue={data.defaultValue}
                    placeholder={data.placeholder}
                    value={data.value}
                    className={`form-control login-input form-input ${
                      data.type === "textarea" ? "description-input p-4" : "p-4"
                    }`}
                    required
                  />
                </FormGroup>
              ))}
              <h4 className="">Beneficiary 2:</h4>
              <br />
              {createTrustBeneficiary1Form.map((data, index) => (
                <FormGroup key={index}>
                  <Label className={data.name !== "message" && "form-label"}>
                    {data.label}
                  </Label>
                  <Input
                    type={data.type}
                    name={data.name}
                    defaultValue={data.defaultValue}
                    placeholder={data.placeholder}
                    value={data.value}
                    className={`form-control login-input form-input ${
                      data.type === "textarea" ? "description-input p-4" : "p-4"
                    }`}
                    required
                  />
                </FormGroup>
              ))}
            </div>
            <br />
          </div>

          <div className="text-center mt-5">
            <Button
              type="submit"
              className="login-button mt-4 mb-4 form-button"
            >
              Create Estate Account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AddEstateAccount