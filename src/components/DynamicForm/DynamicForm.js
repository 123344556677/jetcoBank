import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Switches from "./Switches";
import "./DynamicForm.css";
import {
  featureForUsers,
  featureForAgents,
  featureForMinistry,
} from "mock-data/FormData";
import { createEstateTrustBeneficiaryForm } from "mock-data/FormData";
import RadioButtons from "./RadioButtons";

const DynamicForm = ({
  formData,
  component,
  buttonValue,
  parentComponent,
  defaultSwitchOptions,
  defaultSwitchLabel,
  defaultSwitchOption,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultSwitchOption);
  const [switchOptions, setSwitchOptions] = useState(defaultSwitchOptions);
  const [selectLabel, setSelectLabel] = useState(defaultSwitchLabel);
  const [beneficiary, setBeneficiary] = useState(false);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    switch (selectedValue) {
      case "User":
        setSelectLabel("Feature For Userr");
        setSwitchOptions(featureForUsers);
        break;
      case "Agent":
        setSelectLabel("Feature For Agent");
        setSwitchOptions(featureForAgents);
        break;
      case "Ministry":
        setSelectLabel("Feature For Ministry");
        setSwitchOptions(featureForMinistry);
        break;
      default:
        break;
    }
  };

  const renderButton = () => {
    switch (component) {
      case "User":
      case "Agent":
      case "Disclosures Form":
        return (
          <>
            <Button type="submit" className="login-button">
              Upload Document
            </Button>
            {defaultButton()}
          </>
        );
        case "Developer Settings Form":
        return (
          <>
            <Button type="submit" className="login-button">
              Manage API Keys
            </Button>
            {defaultButton()}
          </>
        );
      case "Login Screen(s) Display Settings Form":
      case "Setting for all Sections Form":
        return (
          <>
            <Button type="submit" className="login-button">
              Upload Image
            </Button>
            {defaultButton()}
          </>
        );
      case "Trust Formation":
        return (
          <>
            <Button
              type=""
              className="login-button"
              onClick={() => setBeneficiary(true)}
            >
              Add Beneficiary
            </Button>
            {defaultButton()}
          </>
        );
      case "Mailbox Setup":
      case "Business Registration":
      case "Custom Domain Form":
        return (
          <>
            <Button type="submit" className="login-button">
              Upload
            </Button>
            {defaultButton()}
          </>
        );
      case "Contact":
        return (
          <div className="inline text-center mt-5">
            <Button
              type="submit"
              className="action-button bg-white form-button button-shadow mt-1"
              style={{ color: "#8EE30A", fontSize: "14px" }}
            >
              Send to one user
            </Button>
            <Button
              type="submit"
              className="login-button form-button button-shadow mt-1"
            >
              Send to everyone
            </Button>
          </div>
        );
      case "Broadcast":
        return (
          <div className="inline text-center mt-5">
            <Button
              type="submit"
              className="action-button bg-white form-broadcast-button button-shadow mt-1"
              style={{ color: "#8EE30A", fontSize: "14px" }}
            >
              Send to one user
            </Button>
            <Button
              type="submit"
              className="action-button form-broadcast-button button-shadow mt-1"
              style={{
                color: "white",
                fontSize: "14px",
                backgroundColor: "#A3B6CC",
              }}
            >
              Send to Selected Groups
            </Button>
            <Button
              type="submit"
              className="login-button form-broadcast-button button-shadow mt-1"
            >
              Send to All Accounts
            </Button>
          </div>
        );
      case "User Features":
        return (
          <div className="mt-5">
            <Button
              type="submit"
              className="login-button form-button button-shadow switches-button mt-1"
            >
              Save
            </Button>
            <br />
            <Button
              type="submit"
              className="action-button bg-white form-button button-shadow mt-3 mb-5"
              style={{
                paddingLeft: "12%",
                paddingRight: "11%",
                color: "#8EE30A",
                fontSize: "14px",
              }}
            >
              Reset to Default
            </Button>
          </div>
        );
      case "Custom Domains":
        return (
          <div className="inline mt-4 ">
            <Button
              className="add-button action-button profile-form-action-button  mt-1 mb-5"
              outline
              size="md"
            >
              Create New
            </Button>
            <Button
              className="action-button block-button profile-form-action-button  mt-1 ml-lg-4 mb-5"
              size="md"
            >
              Change
            </Button>
            <Button
              className="action-button profile-form-action-button  mt-1 ml-lg-4 mb-5"
              size="md"
              color="danger"
            >
              Remove
            </Button>
          </div>
        );
      default:
        return defaultButton();
    }
  };

  const defaultButton = () => (
    <div className="text-center mt-5">
      <Button type="submit" className="login-button mt-4 mb-4 form-button">
        {buttonValue}
      </Button>
    </div>
  );

  return (
    <div>
      <Form className="m-4">
        {formData?.map((data, index) => (
          <FormGroup key={index}>
            <Label className={data.name !== "message" && "form-label"}>
              {data.label}
            </Label>
            {data.type === "select" ? (
              <>
                <Input
                  type="select"
                  name={data?.name}
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="form-control login-input form-input"
                  required
                >
                  {data?.options?.map((option, optionIndex) => (
                    <option key={optionIndex} value={option?.title}>
                      {option?.title}
                    </option>
                  ))}
                </Input>
              </>
            ) : data.type === "radio" ? (
              <>
                <RadioButtons radioData={data}/>
              </>
            ) : (
              <>
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
                {component === "Assign Group" && data?.name === "idNumber" && (
                  <Button type="submit" className="login-button mt-3">
                    Add All
                  </Button>
                )}
              </>
            )}
          </FormGroup>
        ))}
        {parentComponent === "Feature Control" && (
          <Switches switchData={switchOptions} label={selectLabel} />
        )}
        {beneficiary &&
          createEstateTrustBeneficiaryForm?.map((data, index) => (
            <FormGroup key={index}>
              <Label className={data.name !== "message" && "form-label"}>
                {data.label}
              </Label>
              {data.type === "select" ? (
                <>
                  <Input
                    type="select"
                    name={data?.name}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="form-control login-input form-input"
                    required
                  >
                    {data?.options?.map((option, optionIndex) => (
                      <option key={optionIndex} value={option?.title}>
                        {option?.title}
                      </option>
                    ))}
                  </Input>
                </>
              ) : (
                <>
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
                  {component === "Assign Group" &&
                    data?.name === "idNumber" && (
                      <Button type="submit" className="login-button mt-3">
                        Add All
                      </Button>
                    )}
                </>
              )}
            </FormGroup>
          ))}
        {renderButton()}
      </Form>
    </div>
  );
};

export default DynamicForm;
