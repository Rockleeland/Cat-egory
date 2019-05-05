import React from "react";
import {
  StyledContainer,
  StyledTitle,
  Image
} from './style'


const Title = () => {
  return (
    <StyledContainer>
      <StyledTitle>Cat Pics</StyledTitle>
      <Image
        src="http://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-2.gif"
        alt="cat-icon"
      />
    </StyledContainer>
  );
};

export default Title;
