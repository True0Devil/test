import Dashboard from 'pages/Dashboard/Dashboard';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { UserEnterForm } from './UserEnterForm/UserEnterForm';

export const App = () => {
  return (
    <BrowserRouter basename="test">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
