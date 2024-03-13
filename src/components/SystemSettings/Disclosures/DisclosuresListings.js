import DynamicTable from 'components/DynamicTable/DynamicTable'
import { disclosuresData } from 'mock-data/Data';
import { disclosureTablesHeadings } from 'mock-data/Data';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap'

const DisclosuresListings = () => {
    const navigate = useNavigate();
  return (
     <>
      <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
        <div className="main-div">
          <div className="d-flex justify-content-between align-items-center mr-lg-3">
            <h3 className="m-4 pages-heading">Total Disclosures</h3>
            <Button
              size="md"
              className="add-button pl-3 pr-3 mr-3"
              onClick={() => navigate("/admin/systemSettings/addDisclosures")}
            >
              Upload Disclosure
            </Button>
          </div>
          <DynamicTable
            headings={disclosureTablesHeadings}
            tableData={disclosuresData}
            component="Disclosures"
            parentComponent="SystemAndSettings"
          />
        </div>
      </div>
    </>
  )
}

export default DisclosuresListings