import React from "react"
import LoadingSpinner from "../Loader"
import VisibilitySensor from "react-visibility-sensor"
import { StyledDiv, StyledImg } from "./style"

const Image = props => {
  //lazy loading Images and loading spinner
  return (
    <StyledDiv>
      <VisibilitySensor>
        <StyledImg
          saved={props.saved}
          src={props.cats}
          loader={<LoadingSpinner />}
        />
      </VisibilitySensor>
    </StyledDiv>
  );
};

export default Image
