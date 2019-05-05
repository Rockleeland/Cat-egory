import styled from 'styled-components'

export const StyledCard = styled.div`
  box-shadow: ${props => props.theme.boxShadow};;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  padding: 2rem;
  border-radius: 5px;

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;