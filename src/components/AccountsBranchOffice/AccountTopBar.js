import React, { useEffect, useState } from "react";
import "./AccountAndBranch.css";

const AccountTopBar = ({ accountValue, defaultValue,barData }) => {
  const [activeLink, setActiveLink] = useState(defaultValue);
  const handleValue = (val) => {
    setActiveLink(val?.title);
    accountValue(val);
  };

  useEffect(() => {
    setActiveLink(defaultValue);
  }, [defaultValue]);
  return (
    <div className="account-top-bar p-3">
      {barData?.map((data, index) => (
        <h5
          className={
            activeLink === data?.title
              ? "m-3 pages-sub-heading-active account-bar-item-active"
              : "m-3 pages-sub-heading"
          }
          onClick={() => handleValue(data)}
          key={index}
        >
          {data?.title}
        </h5>
      ))}
    </div>
  );
};

export default AccountTopBar;
