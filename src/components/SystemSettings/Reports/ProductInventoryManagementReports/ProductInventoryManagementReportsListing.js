import DynamicTable from "components/DynamicTable/DynamicTable";
import { productInventoryManagementReportsData } from "mock-data/Data";
import { productInventoryManagementReportsHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function ProductInventoryManagementReportsListing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Product Inventory Management Reports
        </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/systemSettings/addProductInventoryReports")
          }
        >
          Generate Product Inventory Management Reports
        </Button>
      </div>
      <DynamicTable
        headings={productInventoryManagementReportsHeadings}
        tableData={productInventoryManagementReportsData}
        component="Product Inventory Management Reports"
      />
    </>
  );
}

export default ProductInventoryManagementReportsListing;
