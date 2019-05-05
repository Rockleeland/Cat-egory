import styled from 'styled-components'
import Img from 'react-image'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import { 
    Container,
    Row,
    Col,
    Button 
} from 'react-bootstrap'

//created theme for default colors within app
export const theme = {
    color: '#E98840 !important',
    backgroundColor: 'white !important',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
}

//default styled components that are used by other components

export const StyledRow = styled(Row)`
    justify-content: center;
`;

export const ButtonLayout = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-self: flex-end;
`;

export const StyledCol = styled(Col)`
    margin-bottom: 10px;
`;

export const StyledContainer = styled(Container)`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 5px;
    background-color: floralwhite;
`;

export const StyledImg = styled(Img)`
    height: 200px;
    width: auto;
    min-height: 350px;
    min-width: 350px;
`;

export const StyledButton = styled(Button)`
    min-width: 50px;
    margin: .5rem auto;
    color: ${props => props.theme.color};
    border-color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};

    &:hover {
        ${props => props.theme.color};
    }
`;
