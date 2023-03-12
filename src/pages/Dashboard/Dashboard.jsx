import { GameStats } from 'components/GameStats/GameStats';
import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo';
import { GeneralSales } from 'components/GeneralSales/GeneralSales';
import { HeroSection } from 'components/HeroSection/HeroSection';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchData } from 'services/service';
import { Main } from './Dashboard.styled';

const Dashboard = () => {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  if (!data) {
    return;
  }

  return (
    <Main>
      <HeroSection title="Dashboard" username="Username" />
      <GeneralInfo stats={data.statistic} />
      <GameStats />
      <GeneralSales data={data.general_sales_time} />
    </Main>
  );
};

export default Dashboard;
