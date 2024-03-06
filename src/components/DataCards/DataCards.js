import { renderSplitText } from "components/Common";
import React from "react";
import { Card } from "reactstrap";

const DataCards = ({ cardVal,component }) => {
  return (
    <div className="card-container">
      {cardVal?.map((data, index) => (
        <Card className={component==="mailbox"?"mailbox-user-card ml-3 mb-3":"user-card ml-3 mb-3"} key={index}>
          <h7 className="text-center user-card-title">
            {renderSplitText(data?.title)}
          </h7>
          <h1 className="text-center user-card-text mt-2">{data?.price}</h1>
        </Card>
      ))}
    </div>
  );
};

export default DataCards;
