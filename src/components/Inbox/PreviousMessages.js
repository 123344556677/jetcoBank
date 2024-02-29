import { previousMessages } from "mock-data/Data";
import React from "react";

const PreviousMessages = () => {
  return (
    <div className="m-4">
      <h7 className="previous-message">Your previous Message</h7>
      {previousMessages?.map((data, index) => (
        <div className="prev-msg-user-info mt-4" key={index}>
          <div className="prev-msg-user-image">
            <img src={data?.icon} alt="user-icon" />
          </div>
          <div className="user-details ml-3">
            <div className="prev-msg-username">
              {data?.name}
              <span className="ml-4 prev-msg-time">({data?.duration})</span>
            </div>
            <div className="previous-message mt-1">{data?.message}</div>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};

export default PreviousMessages;
