import React,{useState,useContext} from 'react';
import { StyledPostBox } from './PostBox.styles';
import { UserContext } from 'provider/UserProvider';



function PostBox({color, title, text1,text2,info,img}) {

  const {handlePost} = useContext(UserContext)

 

  const handleThatPost = (e) =>{
    
    handlePost(title,text1,text2,img)
  }


  return (
    <StyledPostBox color={color} onClick={handleThatPost}>
      <h2>{title}</h2>
      <p>{info}</p>
    </StyledPostBox>
  );
}

export default PostBox;
