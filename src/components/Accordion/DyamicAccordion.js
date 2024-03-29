import React, { useEffect, useState } from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";
import "./DynamicAccordion.css";
import { useNavigate } from "react-router-dom";

const DynamicAccordion = ({ isOpenVal, accordionVal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleAccordion = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(isOpenVal);
  }, [isOpenVal]);

  const handleActiveLink = (val) => {
    navigate(val?.link);
    setActiveLink(val?.title);
  };

  return (
    <div>
      <Collapse isOpen={isOpen}>
        <ListGroup className="accordion">
          {accordionVal?.map((data, index) => (
            <ListGroupItem
              key={index}
              className={
                activeLink === data?.title
                  ? "accordion-item-active"
                  : "accordion-item"
              }
              onClick={() => handleActiveLink(data)}
            >
              {data?.title}
              {activeLink === data?.title && (
                <span
                  className="small-circle ml-3"
                  style={{ backgroundColor: "#91DF46" }}
                ></span>
              )}
            </ListGroupItem>

            //   <span className="accordion-badge  rounded-circle" />
          ))}
        </ListGroup>
      </Collapse>
    </div>
  );
};

export default DynamicAccordion;
