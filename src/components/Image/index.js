import React from 'react'
import LoadingSpinner from '../Loader'
import { StyledDiv, StyledImg } from './style'

const Image = (props) => {
    return (
        <StyledDiv>
            <StyledImg 
                saved={props.saved}
                src={props.cats} 
                loader={<LoadingSpinner />} 
            />
        </StyledDiv>
    )
}

export default Image;