import DynamicTable from 'components/DynamicTable/DynamicTable'
import { finConsultantData } from 'mock-data/Data';
import { finConsultantHeadings } from 'mock-data/Data';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap'

const ConsultantServicesListing = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">
          Total Consultant{" "}
          <span className="total-transactions">(4587)</span>
        </h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() => navigate("/admin/businessAndTaxServices/addFinConsultant")}
        >
          Add Consultant
        </Button>
      </div>
      <DynamicTable
        headings={finConsultantHeadings}
        tableData={finConsultantData}
        component="ConsultantServices"
        parentComponent="BusinessAndTaxServices"
      />
    </>
  )
}

export default ConsultantServicesListing