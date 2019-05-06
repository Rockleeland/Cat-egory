import styled from "styled-components"

export const StyledCard = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 2rem;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 667px) {
    box-shadow: none;
    padding: 0;

    &:hover {
      box-shadow: none;
    }
  }
`;
