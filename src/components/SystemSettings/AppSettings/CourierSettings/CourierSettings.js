import DynamicTable from 'components/DynamicTable/DynamicTable';
import { courierSettingsData } from 'mock-data/Data';
import { courierSettingsHeadings } from 'mock-data/Data';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap'

const CourierSettings = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mr-lg-3">
        <h3 className="m-4 pages-heading">Courier Settings</h3>
        <Button
          size="md"
          className="add-button pl-3 pr-3 mr-3"
          onClick={() =>
            navigate("/admin/accountsAndBranch/addCheckingAccount")
          }
        >
          Courier Settings
        </Button>
      </div>
      <DynamicTable
        headings={courierSettingsHeadings}
        tableData={courierSettingsData}
        component="CourierSettings"
        parentComponent="SystemAndSettings"
      />
    </>
  )
}

export default CourierSettings