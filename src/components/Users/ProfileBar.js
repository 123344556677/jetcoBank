import React, { useEffect, useState } from "react";
import "./User.css";

const ProfileBar = ({ value, defaultValue, component}) => {
  const [activeButton, setActiveButton] = useState();
  const handleActiveButton = (data) => {
    setActiveButton(data);
    component(data);
  };
  useEffect(() => {
    setActiveButton(defaultValue);
    component(defaultValue);
  }, [defaultValue]);
  return (
    <div className="container mt-2">
      <div className="profile-bar">
        <div className="">
          {value?.map((data, index) => (
            <button
              className={`profile-bar-button ${
                activeButton === data && "active"
              } `}
              onClick={() => handleActiveButton(data)}
              key={index}
            >
              {data}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
