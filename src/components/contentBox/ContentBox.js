import React, { useContext } from 'react';
import { UserContext } from 'provider/UserProvider';
import { StyledPostBox,StyleParagrafBox } from './ContentBox.styled';

const ParagrafBox = () => {
  const {
    displayPost: { text1, text2},
  } = useContext(UserContext);

  return (
    <StyleParagrafBox>
      <p>{text1}</p>
      <p>{text2}</p>
    </StyleParagrafBox>
  );
};

function ContentBox() {
  const {
    displayPost: { img },
  } = useContext(UserContext);

  return (
    <StyledPostBox>
        <ParagrafBox/>
      
    {img ? <img src={img.url}></img>: null}
    </StyledPostBox>
  );
}

export default ContentBox;
