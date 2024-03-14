import DynamicTable from "components/DynamicTable/DynamicTable";
import { paymentGatewayData } from "mock-data/Data";
import { paymentGatewayHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const PaymentGateway = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Payment Gateways</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/systemSettings/addPaymentGatewaysSetting")
          }
        >
          Payment Gateways
        </Button>
      </div>
      <DynamicTable
        headings={paymentGatewayHeadings}
        tableData={paymentGatewayData}
        component="PaymentGatewaysSettings"
        parentComponent="SystemAndSettings"
      />
    </>
  );
};

export default PaymentGateway;
