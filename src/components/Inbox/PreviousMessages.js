import React from "react";

const PreviousMessages = ({ messagesData, component }) => {
  return (
    <div className="m-4 ">
      <br />
      <h7 className="previous-message">{messagesData?.heading}</h7>
      {messagesData?.data?.map((data, index) => (
        <div
          className={
            component === "Customer Feedback"
              ? "prev-msg-user-info-feedback mt-4"
              : "prev-msg-user-info mt-4"
          }
          key={index}
        >
          <div
            className={
              component === "Customer Feedback" && "prev-msg-user-image-wrapper"
            }
          >
            <div
              className={
                component !== "Customer Feedback" && "prev-msg-user-image"
              }
            >
              <img src={data?.icon} alt="user-icon" />
            </div>
          </div>
          <div className="user-details ml-3" style={{ padding: "20px" }}>
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
