import { Outlet } from 'react-router';
import './App.scss';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      header
      <Outlet />
      footer
      {/* TODO ADD Footer */}
    </>
  );
};
