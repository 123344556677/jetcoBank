import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./DropDown.css";

function CustomDropDown({ heading, items,className }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className={className}>
          {heading}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          {items?.map((data, index) => (
            <DropdownItem key={index}>{data?.title}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default CustomDropDown;
