import DynamicTable from "components/DynamicTable/DynamicTable";
import { productManagerData } from "mock-data/Data";
import { productManagerHeadings } from "mock-data/Data";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const ProductManagerListing = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="pt-5 pt-md-8 mb-3 ">
    <div className="main-div mt-3 ml-lg-2 mr-lg-2">
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Products Detail </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/businessAndTaxServices/addProductManager")
          }
        >
          Add Product
        </Button>
      </div>
      <DynamicTable
        headings={productManagerHeadings}
        tableData={productManagerData}
        component="Product Manager"
        parentComponent="Business and Tax Sevices"
      />
      </div>
      </div>
    </>
    
  );
};

export default ProductManagerListing;
