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
                component !== "CryptoTrading" &&
                component !== "StockTradingListing" &&
                component !== "Pass Through Account" &&
                component !== "Ledger" &&
                component !== "FinanicalMessagingListing" &&
                component !== "Mailbox Service" && 
                component !== "Mailbox Service" &&
                component !== "Trustee Services" &&
                component !== "Estate Last Will" &&
                component !== "Forensic Data" &&
                component !== "assetProtection" &&
                component !== "propertySecuritization" &&
                component !== "lockBoxService" &&
                component !== "healthSavingAccount" &&
                component !== "BudgetPlans" &&
                component !== "RetirementPlans" &&
                component !== "Credit Repair Review" &&
                component !== "Credit Repair Review Services" &&
                component !== "Credit Repair Dispute" &&
                component !== "Credit Management" &&
                component !== "UCC Management System Monitor" && (
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
                  component !== "StockTradingListing" &&
                  component !== "Ledger" &&
                  component !== "CryptoTrading" &&
                  component !== "FinanicalMessagingListing" &&
                  component !== "Mailbox Service" && 
                  component !== "Mailbox Service" &&
                  component !== "Trustee Services" &&
                  component !== "Estate Last Will" &&
                  component !== "Forensic Data" &&
                  component !== "assetProtection" &&
                  component !== "propertySecuritization" &&
                  component !== "lockBoxService" &&
                  component !== "healthSavingAccount" &&
                  component !== "BudgetPlans" &&
                  component !== "RetirementPlans" &&
                  component !== "Credit Repair Review" &&
                  component !== "Credit Repair Review Services" &&
                  component !== "Credit Repair Dispute" &&
                  component !== "Credit Management" &&
                  component !== "UCC Management System Monitor" && (
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
