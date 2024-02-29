import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import "./Inbox.css";
import SearchBar from "components/Chat/SearchBar";

const InboxUpperBar = () => {
  const [searchbar, setSearchbar] = useState(false);
  return (
    <div className="inbox-upper-bar">
      <Row className="w-100">
        <Col xl={12}>
          <div className="message-upper-bar">
            <h7 className="ml-3 inbox-tag mt-2">Inbox</h7>
            {searchbar ? (
              <SearchBar />
            ) : (
              <img
                src={require("../../assets/img/icons/common/search-bar-icon.png")}
                className="search-icon  mt-3"
                alt="search-icon"
                onClick={() => setSearchbar(true)}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InboxUpperBar;
