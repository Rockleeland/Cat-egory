import styled from "styled-components"
import Loader from "react-loader-spinner"

export const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 667px) {
      max-width: 300px;
  }
`;
