import { StyledWindow } from './Window.styles';
import React, { useContext } from 'react';
import Image from 'components/Image/Image';
import Form from 'components/Form/Form';
import { UserContext } from 'provider/UserProvider';

function Window() {
  const { isLogged } = useContext(UserContext);
  return (
    <StyledWindow isLogged={isLogged}>
      <Image />
      <Form />
    </StyledWindow>
  );
}

export default Window;
