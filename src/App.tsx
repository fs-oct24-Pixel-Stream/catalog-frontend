import { Outlet } from 'react-router';
import './App.scss';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      <Header />
      <Outlet />
      footer
      {/* TODO ADD Footer */}
    </>
  );
};
