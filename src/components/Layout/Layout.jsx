import { HeroSection } from 'components/HeroSection/HeroSection';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Sidebar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
