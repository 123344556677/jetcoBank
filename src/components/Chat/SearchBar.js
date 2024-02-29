import React from "react";
import { Form, FormGroup, Input, InputGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <Form className="navbar-search navbar-search-dark">
      <FormGroup className="mb-0">
        <InputGroup className="input-group-alternative">
          <Input placeholder="Search" type="text" className="navbar-search" />
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default SearchBar;
