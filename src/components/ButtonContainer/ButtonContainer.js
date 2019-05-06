import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { StyledInputGroup, StyledFormControl } from './style'

const ButtonContainer = props => {
  return (
    <StyledInputGroup className="mb-3">
      <StyledFormControl
        placeholder="Category"
        aria-label="Category"
        aria-describedby="basic-addon2"
        onChange={props.handleChange}
        value={props.categoryInput}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={props.savedImages}>
          Save
        </Button>
      </InputGroup.Append>
    </StyledInputGroup>
  );
};

export default ButtonContainer;
