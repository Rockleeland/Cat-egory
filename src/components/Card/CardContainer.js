import React from "react"
import { Row, Col } from "react-bootstrap"
import { StyledCard } from "./style"
import { StyledRow, StyledButton } from "../Layout/style"
import Image from "../Image"
import ButtonContainer from "../ButtonContainer"

const Card = props => {
  return (
    <StyledCard>
      <StyledRow>
        <Image
          saved={props.saved && "false"}
          postCats={props.getCats}
          cats={props.cats}
        />
      </StyledRow>
      <StyledRow>
        <StyledButton variant="outline-primary" onClick={props.getCats}>
          Next Image
        </StyledButton>
      </StyledRow>
      <Row>
        <Col>
          <ButtonContainer
            handleChange={props.handleChange}
            savedImages={props.savedImages}
            categoryInput={props.categoryInput}
          />
        </Col>
      </Row>
    </StyledCard>
  );
};

export default Card
