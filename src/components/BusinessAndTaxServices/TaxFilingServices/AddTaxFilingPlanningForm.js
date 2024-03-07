import { taxFilingPlaningSavingForm } from "mock-data/FormData";
import { taxFilingPlaningActionForm } from "mock-data/FormData";
import { taxFilingPlaningBudgetForm } from "mock-data/FormData";
import { taxFilingPlaningFinancialGoalsForm } from "mock-data/FormData";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const AddTaxFilingPlanningForm = () => {
  return (
    <div className=" ml-lg-1 mr-lg-1">
      <Form className="m-4">
        <h3 className="sheet-table-heading mb-3">Tax Planning - 2024</h3>
        <div className="main-div p-3">
          <Label>Financial Goals</Label>
          <br />
          <br />
          {taxFilingPlaningFinancialGoalsForm.map((data, index) => (
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
        <div className="main-div p-3 mt-4">
          <Label>Savings Strategies</Label>
          <br />
          <br />
          {taxFilingPlaningSavingForm?.map((data, index) => (
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
        <div className="main-div p-3 mt-4">
          <Label>Budget Allocation</Label>
          <br />
          <br />
          {taxFilingPlaningBudgetForm.map((data, index) => (
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
        <div className="main-div p-3 mt-4">
          <Label>Action Items</Label>
          <br />
          <br />
          {taxFilingPlaningActionForm.map((data, index) => (
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
        <div className="text-center mt-5">
          <Button type="submit" className="login-button mt-4 mb-4 form-button">
            Save Tax Planning 2024
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTaxFilingPlanningForm;
