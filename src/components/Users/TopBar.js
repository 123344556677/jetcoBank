import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const TopBar = ({ headings, buttonValue, checkActiveLink, defaultValue }) => {
  const [activeLink, setActiveLink] = useState(defaultValue);
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
  return (
    <div className="top-bar">
      <div className="d-flex align-items-center justify-content-between mr-lg-3">
        <div className="d-flex align-items-center">
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
        <div className="col-auto">
          {activeLink === "Contractors" ? (
            <Button size="md" className="add-button pl-3 pr-3 mr-3 mb-1">
              Add Contractor
            </Button>
          ) : activeLink === "Orders Management" ? (
            <Button size="md" className="add-button pl-3 pr-3 mr-3 mb-1">
              Add Order
            </Button>
          ) : (
            <Button size="md" className="add-button pl-3 pr-3 mr-3 mb-1">
              Add {buttonValue}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
