import { Outlet } from 'react-router';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productsSlice';

import 'bulma/css/bulma.css';
import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import './App.scss';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { fetchAccessories } from './features/accessories/accessoriesSlice';
import { fetchPhones } from './features/phones/phonesSlice';
import { fetchTablets } from './features/tablets/tabletsSlice';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchAccessories());
    dispatch(fetchPhones());
    dispatch(fetchTablets());
  }, []);

  return (
    <div className="body-ajustment">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
