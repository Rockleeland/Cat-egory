import React from "react"
import { StyledDiv } from "./style"
import Image from "../Image"

const SavedImages = props => {
  return (
    <StyledDiv>
      {props.savedImages
        .filter(cat => cat.category === props.category)
        .map(cat => (
            <Image saved="true" key={cat.id} cats={cat.link} alt="icons" />
        ))}
    </StyledDiv>
  );
};

export default SavedImages