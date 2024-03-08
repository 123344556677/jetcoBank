import TopBar from 'components/Users/TopBar'
import { UccManagementSystemHeadings } from 'mock-data/ToBarData';
import React, { useState } from 'react'
import CreateUccFileForm from './CreateUccFileForm';
import DynamicTable from 'components/DynamicTable/DynamicTable';
import { uccPortfolioHeadings } from 'mock-data/Data';
import { uccPortfolioData } from 'mock-data/Data';
import { uccMonitorHeadings } from 'mock-data/Data';
import { uccMonitoroData } from 'mock-data/Data';

const UccManagementSystem = () => {
    const [activeRole, setActiveRole] = useState();
  const handleActiveRole = (val) => {
    setActiveRole(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={UccManagementSystemHeadings}
          checkActiveLink={handleActiveRole}
          buttonValue="no-button"
          defaultValue="File"
          parentComponent="BusinessAndTaxServices"
        />
        <div className="mt-3">
          {activeRole === "File" && (
            <CreateUccFileForm/>
          )}
          {activeRole === "Portfolio" && (
            <DynamicTable
              headings={uccPortfolioHeadings}
              tableData={uccPortfolioData}
              component="UCC Management System Portfolio"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          {activeRole === "Monitor" && (
            <DynamicTable
              headings={uccMonitorHeadings}
              tableData={uccMonitoroData}
              component="UCC Management System Monitor"
              parentComponent="BusinessAndTaxServices"
            />
          )}
          </div>
        </div>
        </div>
  )
}

export default UccManagementSystem