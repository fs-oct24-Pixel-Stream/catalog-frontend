import { Outlet } from 'react-router';
import { Footer } from './components/Footer/Footer';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productsSlice';

import 'bulma/css/bulma.css';
import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import './App.scss';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
