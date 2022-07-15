import { StyledWindow } from './Window.styles'
import React from 'react'
import Image from 'components/Image/Image'
import Form from 'components/Form/Form'

const hendleData = ({login,password}) =>{
  console.log(`Login to ${login}`)
  console.log(`Password to ${password}`)
}

function Window() {
  return (
    <StyledWindow>
        <Image />
        <Form onData = {hendleData} />
    </StyledWindow>
  )
}

export default Window