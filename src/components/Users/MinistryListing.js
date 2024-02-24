import React, { useState } from "react";
import "./User.css";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { userData } from "mock-data/Data";
import { AgentHeadings } from "mock-data/Data";
import TopBar from "./TopBar";
import { ministryHeadings } from "mock-data/ToBarData";
import { regMinistryHeadings } from "mock-data/Data";
import { regMinistryData } from "mock-data/Data";

const MinistryListing = () => {
  const [activeMinistry, setActiveMinistry] = useState();
  const handleActiveMinitry = (val) => {
    setActiveMinistry(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={ministryHeadings}
          buttonValue="Ministry"
          checkActiveLink={handleActiveMinitry}
          defaultValue="Registered Ministry"
        />
        <div className="mt-3">
        {
          activeMinistry==="Registered Ministry"&&
          <DynamicTable
            headings={regMinistryHeadings}
            tableData={regMinistryData}
          />
        }
        {
          activeMinistry==="Contact Ministry"&&
          <DynamicTable
            headings={AgentHeadings}
            tableData={userData}
          />
        }
        {
          activeMinistry==="Contact Client"&&
          <DynamicTable
            headings={AgentHeadings}
            tableData={userData}
          />
        }
        {
          activeMinistry==="Official Services"&&
          <DynamicTable

            headings={AgentHeadings}
            tableData={userData}
          />
        }
        </div>
      </div>
    </div>
  );
};

export default MinistryListing;
