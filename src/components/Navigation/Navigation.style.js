import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`

  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
  
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    content: '';
    transition: opacity 0.4s ease-in-out;
    position: absolute;
    width: 18px;
    height: 3px;
    top: 58%;
    transform: translateY(-50%);
    right: -20px;

  }
`;
