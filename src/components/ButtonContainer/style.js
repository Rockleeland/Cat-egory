import styled from 'styled-components'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export const StyledInputGroup = styled(InputGroup)`
  @media(max-width: 667px) {
    justify-content: center;
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 80%;

  @media(max-width: 667px) {
    max-width: 200px;
  }
`;
