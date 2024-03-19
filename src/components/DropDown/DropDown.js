import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./DropDown.css";

function CustomDropDown({ heading, items, className, type,imageClassName }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className={className}>
        {type === "img"?<img src={require("../../assets/img/icons/common/country-drop-icon.png")} alt="icon"className={imageClassName} />:heading}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          {type === "img"
            ? items?.map((data, index) => (
                <DropdownItem key={index}>
                  <img
                    src={require("../../assets/img/icons/common/country-drop-icon.png")}
                    alt="icon"
                    className={imageClassName} 
                  />{" "}
                </DropdownItem>
              ))
            : items?.map((data, index) => (
                <DropdownItem key={index}>{data?.title}</DropdownItem>
              ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default CustomDropDown;
