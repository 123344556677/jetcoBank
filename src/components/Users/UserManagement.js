import React from "react";
import { Card } from "reactstrap";
import "./User.css";
import { userManagementData } from "mock-data/Data";

const UserManagement = () => {
  const renderSplitText = (text) => {
    const words = text.split(" ");
    if (words.length <= 2) {
      return <div>{words.join(" ")}</div>;
    } else {
      return (
        <div>
          {words.slice(0, 2).join(" ")}
          <br />
          {words.slice(2).join(" ")}
        </div>
      );
    }
  };

  return (
    <div className="pt-5 pt-md-8 mb-3">
      <div className="card-container">
        {userManagementData?.map((data, index) => (
          <Card className="user-card ml-3 mb-3" key={index}>
            <h7 className="text-center user-card-title">
              {renderSplitText(data?.title)}
            </h7>
            <h1 className="text-center user-card-text mt-2">{data?.price}</h1>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
