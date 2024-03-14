import DynamicForm from "components/DynamicForm/DynamicForm";
import FormTopBar from "components/Users/FormTopBar";
import { vendorContractorSettingsForm } from "mock-data/FormData";
import React from "react";

const AddVendorContractorSettingForm = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Vendor/Contractor Settings" />
        <DynamicForm
          formData={vendorContractorSettingsForm}
          component="Vendor/Contractor Settings Form"
          buttonValue="Save Vendor/Contractor Settings"
        />
      </div>
    </div>
  );
};

export default AddVendorContractorSettingForm;
