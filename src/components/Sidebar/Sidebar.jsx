import { Link } from 'react-router-dom';
import { layoutDefinitions } from 'definitions/sharedLayout';
import {
  SidebarMenu,
  MainLogo,
  MenuItem,
  MenuLink,
  MenuList,
  Navigation,
} from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <SidebarMenu>
      <Navigation>
        <Link to="">
          <MainLogo />
        </Link>

        <MenuList>
          {layoutDefinitions.map((item, idx) => (
            <MenuItem key={idx}>
              <MenuLink to={item.path}>{item.icon}</MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </Navigation>
    </SidebarMenu>
  );
};
