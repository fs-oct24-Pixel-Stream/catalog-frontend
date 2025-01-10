import 'bulma/css/bulma.css';

import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import { Outlet } from 'react-router';

import './App.scss';

import { ProductsPage } from './components/Products';

import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      <ProductsPage categoryName="tablet" /> {/*DIFFERENT DEVICES */}
      <Outlet />
      <Footer />
    </>
  );
};
