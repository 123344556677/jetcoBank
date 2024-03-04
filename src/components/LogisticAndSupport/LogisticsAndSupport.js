import React from "react";
import DataCards from "components/DataCards/DataCards";
import { logisticsAndSupportData } from "mock-data/Data";

const LogisticsAndSupport=()=>{
return(
    <div className="pt-5 pt-md-8 mb-3">
      <DataCards cardVal={logisticsAndSupportData} />
    </div>
);

}
export default LogisticsAndSupport

