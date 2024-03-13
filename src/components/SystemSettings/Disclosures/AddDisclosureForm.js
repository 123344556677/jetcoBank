import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { disclosureForm } from "mock-data/FormData";
import React from "react";
import { Button } from "reactstrap";
import "../SystemSettings.css";

const AddDisclosureForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Upload Disclosure" />
        <DynamicForm
          formData={disclosureForm}
          component="Disclosures Form"
          buttonValue="Upload Disclosure"
          parentComponent="SystemSettings"
        />
        <div className="ml-lg-5">
          <h3 className="document-heading ml-2">Upload Document</h3>

          <img
            src={require("../../../assets/img/icons/common/profile-doc-1.png")}
            className="disclosure-document-pic"
            alt="document"
          />
          <div style={{ display: "flex" }} className="mt-2 ml-lg-2">
            <Button size="md" className="action-button block-button pl-5 pr-5">
              Change
            </Button>
            <Button
              color="danger"
              size="md"
              className="action-button pl-5 pr-5"
            >
              Remove
            </Button>{" "}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddDisclosureForm;
