import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from 'icons/MainLogo.svg';

export const Header = styled.header`
  width: 84px;
  height: 100vh;

  padding-top: 14px;

  background-color: #242731;
`;

export const MainLogo = styled(Logo)`
  display: block;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 46px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  //
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  background-color: #191c23;
  border-radius: 50%;
`;
