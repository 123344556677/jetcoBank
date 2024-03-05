import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const TopBar = ({
  headings,
  buttonValue,
  checkActiveLink,
  defaultValue,
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
    if (
      activeLink !== "Standard Branch" &&
      activeLink !== "Custom Branch" &&
      activeLink !== "Create Role" &&
      activeLink !== "Assign Group"
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
                  activeLink === data?.title
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
            activeLink !== "Assign Group" && (
              <div className="col-auto">
                <Button
                  size="md"
                  className="add-button pl-3 pr-3 mr-3 mb-1"
                  onClick={() =>
                    parentComponent === "role Management"
                      ? navigate(`/admin/accountsAndBranch/add${buttonValue}`)
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
