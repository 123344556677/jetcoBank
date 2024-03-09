import React from "react";
import { Button, Table } from "reactstrap";
import "./DynamicTable.css";
import { useNavigate } from "react-router-dom";
import { routes } from "mock-data/routesData";
import { getClassName } from "components/Common";

const DynamicTable = ({ headings, tableData, component, parentComponent }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    const url = routes[parentComponent]?.[component];
    if (url) {
      navigate(url);
    }
  };
  const shouldRenderActions = ![
    "Transaction Detail",
    "CryptoTrading",
    "StockTradingListing",
    "Pass Through Account",
    "Ledger",
    "FinanicalMessagingListing",
    "Mailbox Service",
    "Trustee Services",
    "Estate Last Will",
    "Forensic Data",
    "assetProtection",
    "propertySecuritization",
    "lockBoxService",
    "healthSavingAccount",
    "BudgetPlans",
    "RetirementPlans",
    "Credit Repair Review",
    "Credit Repair Review Services",
    "Credit Repair Dispute",
    "Credit Management",
    "UCC Management System Monitor",
  ].includes(component);

  const renderActionsColumn = () => {
    if (shouldRenderActions) {
      return <th className="table-headings">Actions</th>;
    }
    return null;
  };

  const renderActions = (rowIndex) => {
    if (shouldRenderActions) {
      return (
        <td className="action-column">
          <Button
            size="sm"
            className="add-button action-button pl-3 pr-3"
            outline
          >
            Edit
          </Button>{" "}
          <Button color="danger" size="sm" className="action-button pl-3 pr-3">
            Delete
          </Button>{" "}
          <Button size="sm" className="action-button block-button pl-3 pr-3">
            Block
          </Button>
        </td>
      );
    }
    return null;
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
              {renderActionsColumn()}
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
                        className={
                          component !== "CardManagementListing"
                            ? "mr-2 table-profile-img"
                            : "mr-2 table-other-img"
                        }
                        alt="profile"
                      />
                    )}
                    {cell.value}
                  </td>
                ))}
                {renderActions(rowIndex)}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DynamicTable;
