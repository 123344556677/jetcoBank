import React from "react";
import { Table } from "reactstrap";
import "./DynamicTable.css"; // Import your custom CSS file

const DynamicBalanceSheetTable = ({ data }) => {
  return (
    <div className="table-container">
      <div className="table-wrapper ml-2 mr-2">
        <Table bordered className="stripped-table mt-3">
          <thead>
            <tr>
              <th></th>
              <th className="sheet-table-heading">{data?.year}</th>
              <th
                style={{
                  color: "#000000",
                  textTransform: "none",
                  fontSize: "13px",
                }}
              >
                {data?.title}
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.sections?.map((section, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="sr-column">{section.sr}</td>
                  <td className="balance-heading-col">{section.heading}</td>
                  {section.headingAmount && (
                    <td className="balance-heading-col">
                      {section.headingAmount}
                    </td>
                  )}
                </tr>
                {section.items &&
                  section.items.map((item, idx) => (
                    <tr key={idx}>
                      <td></td>
                      <td className="balance-item-col">{item?.label}</td>
                      <td className="balance-item-col">${item?.amount}</td>
                    </tr>
                  ))}
                {section.total && (
                  <tr>
                    <td></td>
                    <td className="balance-heading-col">
                      Total {section?.heading}
                    </td>
                    <td className="balance-heading-col">${section?.total}</td>
                  </tr>
                )}
                {section.finalValue && (
                  <tr>
                    <td></td>
                    <td className="sheet-table-heading">
                      Total {section?.finalValue}
                    </td>
                    <td className="sheet-table-heading">
                      ${section?.finalAmount}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DynamicBalanceSheetTable;
