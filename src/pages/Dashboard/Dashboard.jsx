import { GameStats } from 'components/GameStats/GameStats';
import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo';
import { GeneralSales } from 'components/GeneralSales/GeneralSales';
import { HeroSection } from 'components/HeroSection/HeroSection';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchData } from 'services/service';
import { MainContent } from './Dashboard.styled';

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  if (!data) {
    return;
  }

  return (
    <MainContent>
      <HeroSection title="Dashboard" username="Username" />
      <main>
        <GeneralInfo stats={data.statistic} />
        <GameStats />
        <GeneralSales data={data.general_sales_time} />
      </main>
    </MainContent>
  );
};

export default Dashboard;
