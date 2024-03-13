import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const RadioButtons = () => {
  return (
    <FormGroup check>
      <Input name="radio1" type="radio" id="radio1" className="custom-radio" />{" "}
      <Label check for="radio1">
        Option one is this and that—be sure to include why it‘s great
      </Label>
    </FormGroup>
  );
};

export default RadioButtons;
