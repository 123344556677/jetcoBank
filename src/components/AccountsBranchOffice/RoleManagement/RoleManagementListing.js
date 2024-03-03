import DynamicTable from "components/DynamicTable/DynamicTable";
import TopBar from "components/Users/TopBar";
import { GroupManagementData } from "mock-data/Data";
import { GroupManagementHeadings } from "mock-data/Data";
import { roleManagementHeadings } from "mock-data/ToBarData";
import React, { useState } from "react";
import CreateRole from "./CreateRole";
import DynamicForm from "components/DynamicForm/DynamicForm";
import { createRoleForm } from "mock-data/FormData";

const RoleManagementListing = () => {
  const [activeRole, setActiveRole] = useState();
  const handleActiveRole = (val) => {
    setActiveRole(val);
  };
  console.log(activeRole, "in file");
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-2 mr-lg-2">
      <div className="main-div">
        <br />
        <TopBar
          headings={roleManagementHeadings}
          checkActiveLink={handleActiveRole}
          buttonValue="Group"
          defaultValue="Group Management"
          parentComponent="role Management"
        />
        <div className="mt-3">
          {activeRole === "Group Management" && (
            <DynamicTable
              headings={GroupManagementHeadings}
              tableData={GroupManagementData}
              component="groupManagement"
            />
          )}
          {activeRole === "Create Role" && (
            <DynamicForm
              formData={createRoleForm}
              component="Create Role"
              buttonValue="Create Role"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleManagementListing;
