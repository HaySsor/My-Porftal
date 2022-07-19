import styled from 'styled-components';

export const StyledPostBox = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 200px;
  background-color: ${({ color }) => color};
  border-radius: 25px;
  box-shadow: 0 10px 10px rgba(66, 68, 90, 0.5);
  transition: box-shadow 0.5s;
  border: none;
  overflow: hidden;
  margin: 20px;
  &:hover,
  &:focus {
    box-shadow: inset 20px 20px 60px rgba(0, 0, 0, 0.3), inset -20px -20px 60px ${({ color }) => color};
  }
  &:nth-child(2) {
    margin-top: 10px;
  }

  p {
    text-align: center;
  }
`;
