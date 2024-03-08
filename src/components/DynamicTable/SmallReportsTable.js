import React from "react";
import { Table } from "reactstrap";

const SmallReportsTable = ({ data }) => {
  return (
    <div className="table-container">
      <div className="table-wrapper ml-2 mr-2">
        <Table bordered className="stripped-table mt-3">
          <thead>
            <tr>
              <th colSpan={data?.headings.length + 1} className="sheet-table-heading p-3">
                {data?.mainHeading}
              </th>
            </tr>
            <tr>
              <th className="sr-column"></th>
              {data?.headings?.map((tableHeadings, index) => (
                <th className="report-heading-col" key={index}>
                  {tableHeadings?.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.sections?.map((section, index) => (
              <React.Fragment key={index}>
                {section.items &&
                  section.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="sr-column"></td>
                      {data?.headings.map((heading, index) => (
                        <td key={index} className="report-item-col">{item[heading.key]}</td>
                      ))}
                    </tr>
                  ))}
              </React.Fragment>
            ))}
            {data?.total && (
              <tr>
                <td></td>
                {data?.total?.map((totalData, index) => (
                  <td className="report-heading-col" key={index}>{totalData?.title}</td>
                ))}
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SmallReportsTable;
