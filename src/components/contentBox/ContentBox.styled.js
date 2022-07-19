import styled from 'styled-components';

export const StyledPostBox = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    max-width: 45%;
    border-radius: 20px;
  }
`;
export const StyleParagrafBox = styled.div`
  display: flex;
  flex-direction: column;

  p {
  
    margin: 15px;
  }
`;
