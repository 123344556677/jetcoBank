import React from "react";
import { Button, Table } from "reactstrap";
import "./DynamicTable.css";
import { useNavigate } from "react-router-dom";
import { routes } from "mock-data/routesData";

const DynamicTable = ({ headings, tableData, component, parentComponent }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    const url = routes[parentComponent]?.[component];
    if (url) {
      console.log("prent component");
      navigate(url);
    }
  };

  const getClassName = (value) => {
  switch (value) {
    case "Active":
    case "In Transit":
    case "Cleared":
    case "In Route":
    case "Open":
      return "active-color";
    case "Inactive":
    case "Closed":
    case "Delivered":
    case "High":
      return "inactive-color";
    case "In Progress":
      return "progress-color";
    case "Medium":
    case "Available":
      return "medium-color";
    case "Low":
      return "closed-color";
    default:
      return "table-data";
  }
};
  return (
    <div className="table-container">
      <div className="table-wrapper ml-2 mr-2">
        <Table borderless className="dynamic-table m-3">
          <thead>
            <tr>
              {headings?.map((data, index) => (
                <th key={index} className="table-headings">
                  {data?.title}
                </th>
              ))}
              {component !== "Transaction Detail" &&
                component !== "Pass Through Account" &&
                 component !== "Mailbox Service"&& (
                  <th className="table-headings">Actions</th>
                )}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row?.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={getClassName(cell.value)}
                    onClick={() => handleNavigation()}
                  >
                    {cell.type === "img" && (
                      <img
                        src={cell.img}
                        className="mr-2 table-profile-img"
                        alt="profile"
                      />
                    )}
                    {cell.value}
                  </td>
                ))}
                {component !== "Transaction Detail" &&
                  component !== "Pass Through Account" &&
                  component !== "Mailbox Service"&& (
                    <td className="action-column">
                      <Button
                        size="sm"
                        className="add-button action-button pl-3 pr-3"
                        outline
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        color="danger"
                        size="sm"
                        className="action-button  pl-3 pr-3"
                      >
                        Delete
                      </Button>{" "}
                      <Button
                        size="sm"
                        className="action-button block-button pl-3 pr-3"
                      >
                        Block
                      </Button>
                    </td>
                  )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DynamicTable;
