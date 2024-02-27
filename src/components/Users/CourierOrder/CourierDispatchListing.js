import React, { useState } from "react";
import "../User.css";
import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "../TopBar";
import { CourierDisptachHeadings } from "mock-data/ToBarData";
import { courierHeadings } from "mock-data/Data";
import { courierData } from "mock-data/Data";
import { orderHeadings } from "mock-data/Data";
import { orderData } from "mock-data/Data";
import TopSubBar from "../TopSubBar";

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
          buttonValue={activeCouriers==="Couriers"?"Courier":"Order"}
          checkActiveLink={handleActiveCourierDsipatch}
          defaultValue="Couriers"
        />
        {activeCouriers === "Orders Management" && <TopSubBar defaultValue="Active" />}
        <div className="mt-3">
        {
          activeCouriers==="Couriers"&&
          <DynamicTable
            headings={courierHeadings}
            tableData={courierData}
            component="CourierandOrder"
          />
        }
        {
          activeCouriers==="Orders Management"&&
          <DynamicTable
            headings={orderHeadings}
            tableData={orderData}
            component="CourierandOrder"
          />
        }
        </div>
      </div>
    </div>
  );
};

export default CourierDisptachListing;
