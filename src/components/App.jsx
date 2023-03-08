import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { UserEnterForm } from './UserEnterForm/UserEnterForm';

export const App = () => {
  return (
    <BrowserRouter basename="test">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
