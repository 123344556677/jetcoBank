import React from "react";
import { CustomInput } from "reactstrap";

function Switches({ switchData, label }) {
  return (
    <div className="mb-4">
      <h3>{label}</h3>
      {switchData?.map((data, index) => (
        <div className="custom-switch-container mt-3" key={index}>
          <CustomInput
            type="switch"
            id={data?.id}
            className="custom-switch"
            key={index}
          />
          <label
            htmlFor={data?.id}
            className="custom-switch-label mt-2 ml-lg-2"
          >
            {data?.label}
          </label>
        </div>
      ))}
      <br />
    </div>
  );
}

export default Switches;
