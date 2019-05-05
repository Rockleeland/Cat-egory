import React from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const ButtonContainer = (props) => {
    return (
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Category"
            aria-label="Category"
            aria-describedby="basic-addon2"
            onChange={props.handleChange}
            value={props.categoryInput}
            />
            <InputGroup.Append>
            <Button 
                variant="outline-secondary"
                onClick={props.handleClick}
                // categoryInput={props.categoryInput}
            >
                Save
            </Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default ButtonContainer;