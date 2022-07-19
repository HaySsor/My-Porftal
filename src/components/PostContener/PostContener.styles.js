import styled from 'styled-components';

export const StyledPostContener = styled.div`
  width: 30%;
  height: 100%;
  padding: 2rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 25px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
  }
`;
