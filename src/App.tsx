import 'bulma/css/bulma.css';

import '../src/styles/utils/variables.scss';
import '../src/styles/utils/mixins.scss';
import { Outlet } from 'react-router';

import './App.scss';
import { ProductsPage } from './components/Products';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      <ProductsPage categoryName="tablet" /> {/*DIFFERENT DEVICES */}
      <Outlet />
      {/* TODO ADD Footer */}
    </>
  );
};
