import FormTopBar from "components/Users/FormTopBar";
import { createAutoLoanForm } from "mock-data/FormData";
import { createAutoLoanVehicleForm } from "mock-data/FormData";
import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const AddAutoLoansAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Create Auto Loans Account" />
        <Form className="m-4">
          {createAutoLoanForm?.map((data, index) => (
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
          <Label className="form-label">Vehicle Detail:</Label>
          <div className="main-div">
            <div className="m-2">
              <br />
              {createAutoLoanVehicleForm?.map((data, index) => (
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
        </Form>
      </div>
    </div>
  );
};

export default AddAutoLoansAccount;
