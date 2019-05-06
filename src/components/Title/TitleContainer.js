import React from "react"
import image from '../../images/kitty.gif'
import { StyledContainer, StyledTitle, Image } from "./style"

const Title = () => {
  return (
    <StyledContainer>
      <StyledTitle>Cat Pics</StyledTitle>
      <Image
        src={image}
        alt="cat-icon"
      />
    </StyledContainer>
  );
};

export default Title
