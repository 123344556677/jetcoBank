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
    "Transaction Logs",
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
    "Investigative Audits",
    "Credit Management",
    "Corporate Collections",
    "Corporate Audits",
    "Forensic Audits",
    "Collection Accounts",
    "Leases",
    "Deeds",
    "Debt Discharge",
    "Lien Placement",
    "Bonds",
    "Lien Removal",
    "Letter Writing",
    "Contract Formation",
    "Agreement Writing",
    "FOIA Requests",
    "Passport Services",
    "Property Registrations",
    "UCC Management System Monitor",
    "documentRegistration",
    "processServing",
    "documentApostileHanling",
    "documentAthenticationHanling",
    "documentHanling",
    "FinServicesAndMessaging",
    "WithdrawalsListing",
    "DepositsListing",
    "CurrencyExchange",
    "E-Filing",
  ].includes(component);

  const renderActionsColumn = () => {
    if (shouldRenderActions) {
      return <th className="table-headings">Actions</th>;
    }
    return null;
  };

  const renderActions = (rowIndex) => {
    if (shouldRenderActions) {
      switch (component) {
        case "AutoLoanAccount":
        case "CashManagementAccount":
        case "CheckingAccount":
        case "AccountManagement":
        case "CorporateAccount":
        case "CreditAccount":
        case "CreditCardAccount":
        case "CustomAccount":
        case "EstateAccount":
        case "LoanAccount":
        case "MortageAccount":
        case "NonProfitAccount":
        case "NotForProfitAccount":
        case "PassThroughAccount":
        case "PlanAccount":
        case "PrepaidAccount":
        case "SavingAccount":
        case "SoleProprietorAccount":
        case "TreasuryManagementAccount":
        case "TrustAccount":
          return (
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
                className="action-button pl-3 pr-3"
              >
                Delete
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Freeze
              </Button>
            </td>
          );
        case "CardManagementListing":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="add-button action-button pl-3 pr-3"
                outline
              >
                Freeze
              </Button>{" "}
              <Button
                color="danger"
                size="sm"
                className="action-button pl-3 pr-3"
              >
                Change
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Update
              </Button>
            </td>
          );
        case "ShippingListingTrack":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="add-button action-button pl-3 pr-3"
                outline
              >
                Close
              </Button>{" "}
              <Button
                color="danger"
                size="sm"
                className="action-button pl-3 pr-3"
              >
                Delete
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Reply
              </Button>
            </td>
          );
        case "Product Manager":
          return (
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
                className="action-button pl-3 pr-3"
              >
                Delete
              </Button>{" "}
            </td>
          );
        case "TaxFilingPreparation":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Viewer
              </Button>
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                E-File Active
              </Button>
            </td>
          );
        case "Transaction":
          return (
            <td className="action-column">
              <Button
                color="danger"
                size="sm"
                className="action-button pl-3 pr-3"
              >
                Cancel
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Transfer
              </Button>
            </td>
          );
        case "manageBranchAndOffices":
        case "groupManagement":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="add-button action-button pl-3 pr-3"
                outline
              >
                Edit
              </Button>{" "}
            </td>
          );
        case "ShippingTrackActive":
        case "CourierServiceActive":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="block-button action-button pl-3 pr-3"
              >
                Track
              </Button>{" "}
            </td>
          );
        case "FinanicalMessagingListingFINCEN":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="block-button action-button pl-3 pr-3"
              >
                Create XML
              </Button>{" "}
            </td>
          );
        case "Estate Ancestary":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="action-button add-button pl-3 pr-3"
                outline
              >
                Edit
              </Button>{" "}
              <Button
                size="sm"
                className="block-button action-button pl-3 pr-3"
              >
                View
              </Button>{" "}
            </td>
          );
        case "Estate Planning":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="block-button action-button pl-3 pr-3"
              >
                Approve
              </Button>{" "}
            </td>
          );
        case "ShippingTrackDelivered":
        case "CourierServiceDelivered":
          return (
            <td className="action-column">
              <Button
                color="danger"
                size="sm"
                className="action-button pl-3 pr-3"
              >
                Re Order
              </Button>{" "}
            </td>
          );
        case "Promotional Updates":
        case "Product News":
        case "AppPromotions":
        case "Broadcast Message":
        case "Announcements":
        case "AppHistoryAndChanges":
        case "CourierSettings":
        case "ButtonAndText":
        case "colorAndTheme":
        case "UserDisplay":
        case "developerSettings":
        case "FeaturesAndSettings":
        case "financialInstituitionSettings":
        case "LanguageSettings":
        case "LoginScreenSettings":
        case "PaymentGatewaysSettings":
        case "SecuritySettings":
        case "SettingForAll":
        case "Vendor":
        case "Contractor":
          return (
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
                className="action-button pl-3 pr-3"
              >
                Delete
              </Button>{" "}
            </td>
          );
        case "ConsultantServices":
          return (
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
                className="action-button pl-3 pr-3"
              >
                Delete
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Freeze
              </Button>{" "}
            </td>
          );
        case "Disclosures":
          return (
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
                className="action-button pl-3 pr-3"
              >
                Delete
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Download
              </Button>{" "}
            </td>
          );
        case "UCC Management System Portfolio":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="add-button action-button pl-3 pr-3"
                outline
              >
                New Filing
              </Button>{" "}
              <Button
                size="sm"
                className="action-button portfolio-button pl-3 pr-3"
              >
                Edit Portfolio
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Renew Filing
              </Button>{" "}
              <Button
                size="sm"
                className="action-button download-button pl-3 pr-3"
              >
                Download
              </Button>{" "}
            </td>
          );
        case "Accounting Reports":
        case "FINCENSingleReportListing":
        case "MinistryNotaryCourierServicesReports":
        case "MSB Reports":
        case "Tax Reports":
        case "Product Inventory Management Reports":
        case "Statistics Report":
        case "System Health Reports":
        case "Transaction Logs":
          return (
            <td className="action-column">
              <Button
                size="sm"
                className="action-button portfolio-button pl-3 pr-3"
              >
                Save
              </Button>{" "}
              <Button
                size="sm"
                className="action-button block-button pl-3 pr-3"
              >
                Download
              </Button>{" "}
            </td>
          );

        default:
          return (
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
                className="action-button pl-3 pr-3"
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
          );
      }
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
                          component !== "CardManagementListing" &&
                          component !== "UserDisplay" &&
                          component !== "SettingForAll" &&
                          component !== "LoginScreenSettings"
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
