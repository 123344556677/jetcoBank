import React from "react";
import "./DynamicForm.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const DynamicForm = ({ formData, component }) => {
  return (
    <div>
      <Form className="m-4">
        {formData?.map((data, index) => (
          <FormGroup key={index}>
            <Label className={data.name !== "message" && "form-label"}>
              {data?.label}
            </Label>
            <Input
              type={data?.type}
              name={data?.name}
              defaultValue={data?.defaultValue}
              placeholder={data?.placeholder}
              className={`form-control login-input form-input ${
                data.type === "textarea" ? "description-input p-4" : "p-4"
              }`}
              required
            />
          </FormGroup>
        ))}
        {(component === "User" || component === "Agent") && (
          <Button type="submit" className="login-button">
            Upload Document
          </Button>
        )}
        {component !== "Contact" && (
          <div className="text-center mt-5">
            <Button
              type="submit"
              className="login-button mt-4 mb-4 form-button"
            >
              Add {component}
            </Button>
          </div>
        )}
        {component === "Contact" && (
          <div className=" inline text-center mt-5">
            <Button
              type="submit"
              className="action-button bg-white form-button button-shadow mt-1"
              style={{ color: "#8EE30A", fontSize: "14px" }}
            >
              send to one user
            </Button>
            <Button
              type="submit"
              className="login-button  form-button button-shadow mt-1"
            >
              Send to everyone
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default DynamicForm;
