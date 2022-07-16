import React, {useContext}from 'react';
import { Wrapper } from './Root.style';
import { GlobalStyle } from 'assets/style/GlobalState';
import Window from 'components/Window/Window';
import UserProvider from 'provider/UserProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from 'provider/UserProvider';

function Root() {

  return (
    <Router>
      <GlobalStyle />
      <UserProvider>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Window />}></Route>
          </Routes>
        </Wrapper>
      </UserProvider>
    </Router>
  );
}

export default Root;
