import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo';
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
    </Main>
  );
};

export default Dashboard;
