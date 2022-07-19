import React, { useContext } from 'react';
import { StyledContentsPost } from './ContentsPost.styles';
import { UserContext } from 'provider/UserProvider';
import ContentBox from 'components/contentBox/ContentBox';

function ContentsPost() {
  const {
    displayPost: { title },
  } = useContext(UserContext);

  return (
    <StyledContentsPost>
      <h1>{title}</h1>
      <ContentBox />
    </StyledContentsPost>
  );
}

export default ContentsPost;
