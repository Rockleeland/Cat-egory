import styled from "styled-components"
import Img from "react-image"

export const StyledDiv = styled.div`
  display: flex;
  min-height: 350px;
  /* align-items: ${props => (props.saved ? "flex-start" : "center")}; */

  div {
      display: flex;
      justify-content: ${props => (props.saved ? "flex-start" : "center")};
      align-items: ${props => (props.saved ? "flex-start" : "center")};
  }
`;

export const StyledImg = styled(Img)`
  margin: 0.2rem;
  height: ${props => (props.saved ? "80px" : "350px")};
  max-height: ${props => (props.saved ? "80px" : "350px")};
  max-width: ${props => (props.saved ? "80px" : "350px")};
  border-radius: 5px;

  @media (max-width: 667px) {
      max-width: 300px;
  }
`;
