import { Outlet } from 'react-router';

import 'bulma/css/bulma.css';
import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import './App.scss';

import { Footer } from './components/Footer/Footer';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import { fetchPhones } from './features/phones/phonesSlice';
import { fetchTablets } from './features/tablets/tabletsSlice';
import { fetchAccessories } from './features/accessories/accessoriesSlice';
import { fetchProducts } from './features/products/productsSlice';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // useEffect(() => {
  //   dispatch(fetchPhones());
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchTablets());
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchAccessories());
  // }, []);

  return (
    <div className="body-ajustment">
      {/* TODO ADD Header */}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
