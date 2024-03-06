import FormTopBar from "components/Users/FormTopBar";
import { createPassThroughSenderContactForm } from "mock-data/FormData";
import { createPassThroughSenderAccountForm } from "mock-data/FormData";
import { createPassThroughForm } from "mock-data/FormData";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const AddPassThroughAccount = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Create Pass-Through Accounts" />
        <Form className="m-4">
          {createPassThroughForm?.map((data, index) => (
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
          <Label className="form-label">Add Design/Destination Details:</Label>
          <div className="main-div">
            <div className="m-2">
              <br />
              <h4 className="">Add Origin Details:</h4>
              <br />
              <FormGroup>
                <Label className="form-label">Sender's Name</Label>
                <Input
                  type="text"
                  name="senderName"
                  placeholder="sender name"
                  className="form-control login-input form-input"
                  required
                />
              </FormGroup>
              <Label className="form-label">
                Sender's Contact Information:
              </Label>
              {createPassThroughSenderContactForm?.map((data, index) => (
                <FormGroup key={index} className="mt-2">
                  <Label
                    className={data.name !== "message" && ""}
                    style={{ color: "#000000" }}
                  >
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
              <Label className="form-label">Sender's Account Details:</Label>
              {createPassThroughSenderAccountForm?.map((data, index) => (
                <FormGroup key={index} className="mt-2">
                  <Label
                    className={data.name !== "message" && ""}
                    style={{ color: "#000000" }}
                  >
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
              <h4 className="">Add Destination Details:</h4>
              <br />
              <FormGroup>
                <Label className="form-label">Recipitent's Name</Label>
                <Input
                  type="text"
                  name="recipitentName"
                  placeholder="recipitent name"
                  className="form-control login-input form-input"
                  required
                />
              </FormGroup>
              <Label className="form-label">
                Recipitent's Contact Information:
              </Label>
              {createPassThroughSenderContactForm?.map((data, index) => (
                <FormGroup key={index} className="mt-2">
                  <Label
                    className={data.name !== "message" && ""}
                    style={{ color: "#000000" }}
                  >
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
              <Label className="form-label">
                Recipitent's Account Details:
              </Label>
              {createPassThroughSenderAccountForm?.map((data, index) => (
                <FormGroup key={index} className="mt-2">
                  <Label
                    className={data.name !== "message" && ""}
                    style={{ color: "#000000" }}
                  >
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
              Create Pass-Through Account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddPassThroughAccount;
