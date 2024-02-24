import React, { useState } from "react";
import "./User.css";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "./TopBar";
import { CourierDisptachHeadings } from "mock-data/ToBarData";
import { courierHeadings } from "mock-data/Data";
import { courierData } from "mock-data/Data";

const CourierDisptachListing= () => {
  const [activeCouriers, setActiveCourier] = useState();
  const handleActiveCourierDsipatch = (val) => {
    setActiveCourier(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={CourierDisptachHeadings}
          buttonValue="Courier"
          checkActiveLink={handleActiveCourierDsipatch}
          defaultValue="Couriers"
        />
        <div className="mt-3">
        {
          activeCouriers==="Couriers"&&
          <DynamicTable
            headings={courierHeadings}
            tableData={courierData}
          />
        }
        {
          activeCouriers==="Orders Management"&&
          <DynamicTable
            headings={courierHeadings}
            tableData={courierData}
          />
        }
        </div>
      </div>
    </div>
  );
};

export default CourierDisptachListing;
