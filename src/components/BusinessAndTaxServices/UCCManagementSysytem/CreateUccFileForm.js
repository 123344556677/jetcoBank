import { createUccDebtorSecurityForm } from 'mock-data/FormData';
import { createUccCollatoralForm } from 'mock-data/FormData';
import { createUccDebtorInfoForm } from 'mock-data/FormData';
import React from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


const CreateUccFileForm = () => {
  return (
    <div className=" ml-lg-1 mr-lg-1">
      <Form className="m-4">
        <div className="main-div p-3">
          <Label>Debtor Information</Label>
          <br />
          <br />
          {createUccDebtorInfoForm.map((data, index) => (
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
          <Label>Secured Party Info</Label>
          <br />
          <br />
          {createUccDebtorSecurityForm?.map((data, index) => (
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
          <Label>Collateral Details</Label>
          <br />
          <br />
          {createUccCollatoralForm.map((data, index) => (
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
            Add File New UCC
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CreateUccFileForm