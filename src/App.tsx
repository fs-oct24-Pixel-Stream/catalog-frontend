import { Outlet } from 'react-router';
import './App.scss';
import { Header } from './components/Header/Header';

import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};
