import React, { useContext } from 'react';
import { Wrapper } from './Root.style';
import { GlobalStyle } from 'assets/style/GlobalState';
import Window from 'components/Window/Window';
import UserProvider from 'provider/UserProvider';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostWindow from 'components/PostWindow/PostWindow';
import Navbar from 'components/template/Navbar';

function Root() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar>
        <UserProvider>
          <Wrapper>
            <Routes>
              <Route path="/" element={<PostWindow />}></Route>
            </Routes>
          </Wrapper>
        </UserProvider>
      </Navbar>
    </Router>
  );
}

export default Root;
