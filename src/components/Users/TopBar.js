import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const TopBar = ({
  headings,
  buttonValue,
  checkActiveLink,
  defaultValue,
  component,
  parentComponent,
}) => {
  const [activeLink, setActiveLink] = useState(defaultValue);
  const navigate = useNavigate();
  const handleValue = (val) => {
    setActiveLink(val?.title);
    checkActiveLink(val?.title);
  };
  useEffect(() => {
    checkActiveLink(activeLink);
  }, [activeLink]);

  useEffect(() => {
    setActiveLink(defaultValue);
  }, [defaultValue]);

  const addButtonLabel = () => {
    if (activeLink === "Contractors") {
      return "Add Contractor";
    }
    if (activeLink === "Orders Management") {
      return "Add Order";
    }
    if (activeLink === "Custom Email" || activeLink === "Website Design") {
      return "Preview Website";
    }
    if (component === "financialMessaging") {
      return "Create Message";
    }
    if (component === "Ledger") {
      return "Create Ledger";
    }
    if(buttonValue==="Generate FinCEN Single Report"||buttonValue==="Generate FinCEN Batch Report"||buttonValue==="Generate FinCEN XME Report"){
      return `${buttonValue}`;
    }
    if (
      activeLink !== "Standard Branch" &&
      activeLink !== "Custom Branch" &&
      activeLink !== "Create Role" &&
      activeLink !== "Assign Group" &&
      activeLink !== "Messaging" &&
      activeLink !== "Initiate Support Ticket" &&
      buttonValue !== "no-button"
    ) {
      return `Add ${buttonValue}`;
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="d-flex align-items-center justify-content-between mr-lg-3">
          <div className="d-flex flex-wrap align-items-center">
            {headings?.map((data, index) => (
              <h4
                className={
                  component === "EstateAndTrustServices"
                    ? activeLink === data?.title
                      ? "m-2 pb-2 pages-heading-one-active"
                      : "m-2  pb-2 pages-heading-one"
                    : activeLink === data?.title
                    ? "m-3 pages-heading-one-active"
                    : "m-3 pages-heading-one"
                }
                key={index}
                onClick={() => handleValue(data)}
              >
                {data?.title}
              </h4>
            ))}
          </div>
          {activeLink !== "Standard Branch" &&
            activeLink !== "Custom Branch" &&
            activeLink !== "Create Role" &&
            activeLink !== "Assign Group" &&
            activeLink !== "Messaging" &&
            activeLink !== "Initiate Support Ticket" &&
            buttonValue !== "no-button" && (
              <div className="col-auto">
                <Button
                  size="md"
                  className="add-button pl-3 pr-3 mr-3 mb-1"
                  onClick={() =>
                    parentComponent === "role Management"
                      ? navigate(`/admin/accountsAndBranch/add${buttonValue}`)
                      : parentComponent === "BusinessAndTaxServices"
                      ? navigate(
                          `/admin/businessAndTaxServices/add${buttonValue}`
                        )
                      : parentComponent === "FinServicesAndMessaging"
                      ? navigate(
                          `/admin/finServicesAndMessaging/add${buttonValue}`
                        )
                      : parentComponent === "OtherFinAndLegal"
                      ? navigate(`/admin/finAndLegal/add${buttonValue}`)
                      :parentComponent === "SystemAndSettings"
                      ? navigate(`/admin/systemSettings/add${buttonValue}`)
                      : navigate(`/admin/userManagement/add${buttonValue}`)
                  }
                >
                  {addButtonLabel()}
                </Button>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
