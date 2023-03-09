import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Header,
  MainContainer,
  MainLogo,
  MenuItem,
  MenuLink,
  MenuList,
  Navigation,
} from './Layout.styled';
import { ReactComponent as DashBoardLogo } from 'icons/dashboard.svg';
import { ReactComponent as CardsLogo } from 'icons/cards.svg';
import { ReactComponent as ProductLogo } from 'icons/product.svg';
import { ReactComponent as WearTearLogo } from 'icons/wear-tear.svg';
import { ReactComponent as GamesLogo } from 'icons/games.svg';
import { ReactComponent as SettingsLogo } from 'icons/settings.svg';

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <Navigation>
          <Link to="">
            <MainLogo />
          </Link>

          <MenuList>
            <MenuItem>
              <MenuLink to="">
                <DashBoardLogo />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to="">
                <CardsLogo />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to="">
                <ProductLogo />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to="">
                <WearTearLogo />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to="">
                <GamesLogo />
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to="">
                <SettingsLogo />
              </MenuLink>
            </MenuItem>
          </MenuList>
        </Navigation>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
