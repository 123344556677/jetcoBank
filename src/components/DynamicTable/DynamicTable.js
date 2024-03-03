import React from "react";
import { Button, Table } from "reactstrap";
import "./DynamicTable.css";
import { useNavigate } from "react-router-dom";
import { routes } from "mock-data/routesData";


const DynamicTable = ({ headings, tableData, component,parentComponent }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    const url = routes[parentComponent]?.[component];
    if (url) {
       console.log("prent component")
      navigate(url);
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
              {component !== "Transaction Detail" && (
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
                    className={
                      (cell.value === "Active" && "active-color") ||
                      (cell.value === "Inactive" && "inactive-color") ||
                      "table-data"
                    }
                    onClick={() => handleNavigation()}
                  >
                    {cell.value}
                  </td>
                ))}
                {component !== "Transaction Detail" && (
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
