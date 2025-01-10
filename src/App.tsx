import { Outlet } from 'react-router';
import './App.scss';

import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      <Outlet />

      <Footer />
    </>
  );
};
