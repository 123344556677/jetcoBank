import React from "react";
import "./User.css";
import { userManagementData } from "mock-data/Data";
import DataCards from "components/DataCards/DataCards";

const UserManagement = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <DataCards cardVal={userManagementData} />
    </div>
  );
};

export default UserManagement;
