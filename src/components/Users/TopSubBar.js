import { orderSubHeadings } from "mock-data/Data";
import React, {  useEffect, useState } from "react";


const TopSubBar = ({defaultValue}) => {
  const [activeLink, setActiveLink] = useState(defaultValue);
  const handleValue = (val) => {
    setActiveLink(val?.title);
  };

  useEffect(()=>{
  setActiveLink(defaultValue)
  },[defaultValue])

  return (
    <div className="top-bar">
      <div className="d-flex align-items-center justify-content-between mr-lg-3">
        <div className="d-flex align-items-center mt-2">
          {orderSubHeadings?.map((data, index) => (
            <h5
              className={
                activeLink === data?.title
                  ? "m-4 pages-sub-heading-active"
                  : "m-4 pages-sub-heading"
              }
              key={index}
              onClick={() => handleValue(data)}
            >
              {data?.title}
            </h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSubBar;
