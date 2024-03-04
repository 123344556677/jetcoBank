import React, { useState } from "react";
import DynamicTable from "components/DynamicTable/DynamicTable";
import { shippingTrackHeadings } from "mock-data/ToBarData";
import { shippingTracckHeadingsTable } from "mock-data/Data";
import TopBar from "components/Users/TopBar";
import { shippingTracckHeadingsTableData } from "mock-data/Data";
import { shippingTracckHeadingsTableDataDelivered } from "mock-data/Data";

const ShippingTrackListing = () => {
  const [ShippingTrack, setShippingTrack] = useState();
  const handleActiveShippingTrack = (val) => {
    setShippingTrack(val);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={shippingTrackHeadings}
          buttonValue="Ministry"
          checkActiveLink={handleActiveShippingTrack}
          defaultValue="Active"
        />
        <div className="mt-3">
          {ShippingTrack === "Active" && (
            <DynamicTable
              headings={shippingTracckHeadingsTable}
              tableData={shippingTracckHeadingsTableData}
              component="ShippingListingTrack"
              parentComponent="logisticsAndSupport"
            />
          )}
          {ShippingTrack === "Delivered" && (
            <DynamicTable
              headings={shippingTracckHeadingsTable}
              tableData={shippingTracckHeadingsTableDataDelivered}
              component="ShippingListingTrack"
              parentComponent="logisticsAndSupport"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ShippingTrackListing;
