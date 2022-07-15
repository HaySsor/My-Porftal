import { StyledImage } from "./Image.styles";
import React from 'react'
import Logo from 'img/Logo.svg'

function Image() {
  return (

    <StyledImage>
        <img src={Logo}></img>
    </StyledImage>
  )
}

export default Image