import React from 'react'
import { Wrapper } from './Navbar.style';
import Navigation from 'components/Navigation/Navigation';

const Navbar= ({ children }) =>{return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );}



export default Navbar