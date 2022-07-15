import React from 'react';
import { Wrapper } from './Root.style';
import { GlobalStyle } from 'assets/style/GlobalState';
import Window from 'components/Window/Window';

function Root() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Window />
      </Wrapper>
    </>
  );
}

export default Root;
