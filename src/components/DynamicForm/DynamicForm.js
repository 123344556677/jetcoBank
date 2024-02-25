import React, { useState } from "react";
import "./DynamicForm.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const DynamicForm = ({formData,component}) => {
  return (
    <div>
      <Form className="m-4">
      {
        formData?.map((data,index)=>(
        <FormGroup key={index}>
          <Label className="form-label">
            {data?.label}
          </Label>
          <Input
            type={data?.type}
            name={data?.name}
            placeholder={data?.placeholder}
            className={`form-control login-input form-input ${data.type === 'textarea' ? 'description-input p-4' : 'p-4'}`}
            required
          />
        </FormGroup>
        ))
      }
      {
        (component==="User"||component==="Agent")&&
        <Button type="submit" className="login-button">
          Upload Document
        </Button>
      }
        <div className="text-center mt-5">
          <Button type="submit" className="login-button mt-4 mb-4 form-button">
            Add {component}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DynamicForm;
