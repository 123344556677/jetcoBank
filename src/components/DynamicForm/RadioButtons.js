import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const RadioButtons = ({ radioData }) => {
  return (
    <div className={radioData?.className}>
      {radioData?.options?.map((option) =>
        option?.type === "img" ? (
          <FormGroup check className="mt-3">
            <Input
              name={option?.value}
              type="radio"
              id={option?.value}
              className="custom-radio"
            />{" "}
            <Label check for={option?.value} className="radio-label">
              <img src={option?.img} alt={option?.name} className={option?.className} />
            </Label>
          </FormGroup>
        ) : option?.type === "text" ? (
          <FormGroup check className="mt-3">
            <Input
              name={option?.name}
              type="radio"
              id={option?.name}
              className="custom-radio"
            />{" "}
            <Label
              check
              for={option?.name}
              className="radio-label"
              style={{
                color: option?.color,
                fontWeight: option?.fontWeight,
                fontSize: option?.fontSize,
              }}
            >
              {option.value}
            </Label>
          </FormGroup>
        ) : option?.type === "box" ? (
          <FormGroup check className="mt-3">
            <Input
              name={option?.value}
              type="radio"
              id={option?.value}
              className="custom-radio"
            />{" "}
            <Label check for={option?.value} className="radio-label">
              <div
                className={option?.className}
                style={{ backgroundColor: option?.backgroundColor }}
              ></div>
            </Label>
          </FormGroup>
        ) : (
          <FormGroup check className="mt-3">
            <Input
              name={option?.value}
              type="radio"
              id={option?.value}
              className="custom-radio"
            />{" "}
            <Label
              check
              for={option?.value}
              className={`${option?.headingClassName} radio-label`}
            >
              {option?.heading}
            </Label>
            {option?.subHeading && (
              <Label
                check
                for={option?.value}
                className={option?.subHeadingClassName}
              >
                {option?.subHeading}
              </Label>
            )}
          </FormGroup>
        )
      )}
    </div>
  );
};

export default RadioButtons;
