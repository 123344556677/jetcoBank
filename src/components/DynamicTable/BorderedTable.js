import { getClassName } from "components/Common";
import React from "react";
import { Table } from "reactstrap";

const BorderedTable = ({ tableHeadings, tableData }) => {
  return (
    <div>
      <Table bordered className="stripped-table" style={{borderRadius:"15px"}}>
        <thead>
          <tr>
            {tableHeadings?.map((data, index) => (
              <th key={index} className="balance-heading-col" style={{textTransform:"none",fontSize:"12px"}}>
                {data?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row?.map((cell, colIndex) => (
                <td key={colIndex} className={getClassName(cell.value)}>
                  {cell.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BorderedTable;
