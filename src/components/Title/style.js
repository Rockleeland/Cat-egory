import styled from "styled-components"

export const StyledTitle = styled.div`
  color: ${props => props.theme.color};
  font-family: "Rouge Script", cursive;
  font-size: 4vw;
  font-weight: normal;
  line-height: 48px;
  margin: 1rem 0;
  text-align: center;
  text-shadow: 1px 1px 2px #082b34;
`;

export const StyledContainer = styled.div`
  display: flex;
  margin: .5rem auto;
  flex-direction: space-evenly;
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  flex: 0.3;
  margin-top: 1rem;
`;
