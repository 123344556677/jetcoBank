import DynamicForm from "components/DynamicForm/DynamicForm";
import TopBar from "components/Users/TopBar";
import { createBusinessDomainForm } from "mock-data/FormData";
import { createBusinessCustomEmailForm } from "mock-data/FormData";
import { createBusinessRegistrationForm } from "mock-data/FormData";
import { businessManageServicesheadings } from "mock-data/ToBarData";
import React, { useState } from "react";
import LogoDesign from "./LogoDesign";
import Copyright from "./Copyright";
import Trademark from "./Trademark";

const BusinessManageServices = () => {
  const [activeRole, setActiveRole] = useState();
  const handleActiveRole = (val) => {
    setActiveRole(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={businessManageServicesheadings}
          checkActiveLink={handleActiveRole}
          buttonValue={activeRole==="Custom Email"||activeRole==="Website Design"?"Preview Website":activeRole==="Custom Domains"?"Domains":"no-button"}
          defaultValue="New Business Registration"
          parentComponent="BusinessAndTaxServices"
        />
        <div className="mt-3">
          {activeRole === "New Business Registration" && (
            <DynamicForm
              formData={createBusinessRegistrationForm}
              component="Business Registration"
              buttonValue="New Business Registration"
            />
          )}
          {activeRole === "Custom Email" && (
            <DynamicForm
              formData={createBusinessCustomEmailForm}
              component="Custom Email"
              buttonValue="Change Email Address"
            />
          )}
          {activeRole === "Custom Domains" && (
            <DynamicForm
              formData={createBusinessDomainForm}
              component="Custom Domains"
            />
          )}
          {activeRole === "Logo Design" && <LogoDesign />}
          {activeRole === "Copyright" && <Copyright />}
          {activeRole === "Trademark" && <Trademark />}
        </div>
      </div>
    </div>
  );
};

export default BusinessManageServices;
