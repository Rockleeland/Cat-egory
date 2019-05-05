import styled from 'styled-components';
import Img from 'react-image'

export const StyledDiv = styled.div`
    display: flex;
`;

export const StyledImg = styled(Img)`
    margin: .2rem;
    height: ${props => props.saved ? '80px' : '350px'};
    max-height: ${props => props.saved ? '80px' : '350px'};
    max-width: ${props => props.saved ? '80px' : '350px'};
    border-radius: 5px;
`;