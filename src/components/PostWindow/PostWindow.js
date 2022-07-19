import React, { useContext } from 'react';
import { Wrapper } from './PostWindow.styles';
import { UserContext } from 'provider/UserProvider';
import PostContener from 'components/PostContener/PostContener';
import ContentsPost from 'components/ContentsPost/ContentsPost';

function PostWindow() {
  const { isLogged } = useContext(UserContext);
  return (
    <Wrapper isLogged={isLogged}>
      <PostContener />
      <ContentsPost />
    </Wrapper>
  );
}

export default PostWindow;
