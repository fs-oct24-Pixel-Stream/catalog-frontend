import 'bulma/css/bulma.css';

import './utils/variables.scss';
import './utils/mixins.scss';
import { Outlet } from 'react-router';

import './App.scss';
import { Phones } from './components/Phones';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      {/* header */}
      <Phones />
      <Outlet />
      {/* footer */}
      {/* TODO ADD Footer */}
    </>
  );
};
