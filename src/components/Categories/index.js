import React from "react";
import Image from '../Image'
import { StyledDiv } from './style'


const Categories = (props) => {
  let { savedImages } = props
  const categoriesView = () => {
    if (savedImages !== undefined && savedImages !== []) {
      return (
        <StyledDiv>
      {savedImages.map(image => {
        let { id, link } = image
        return (
          <div key={id}>
            <Image
              saved='true'
              cats={link} 
              alt='cat'/>
          </div>
        )
      })}
        </StyledDiv>
      )
    }
  }
  return (
    <div>
      {categoriesView()}
    </div>
  )
}

export default Categories;