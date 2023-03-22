import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'icons/MainLogo.svg';

export const SidebarMenu = styled.aside`
  padding-top: 14px;
  min-height: 100vh;

  background-color: #242731;
`;

export const MainLogo = styled(Logo)`
  display: block;
`;

export const Navigation = styled.nav`
  width: 84px;

  display: flex;
  flex-direction: column;
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

  color: #7d869e;
  background-color: #191c23;
  border-radius: ${({ theme }) => theme.borderRadius.round};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #8941ff;
  }

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: #8941ff;
  }
`;
