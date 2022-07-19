import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/Navigation/Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          MY Page 🥸
        </h1>
      </Logo>
      <StyledLink  to="/">
        Article
      </StyledLink>
      {/* <StyledLink to="/add-user">Add user</StyledLink> */}
      {/* <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink> */}
    </Wrapper>
  );
};

export default Navigation;
