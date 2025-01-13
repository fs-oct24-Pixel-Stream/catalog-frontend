import { Outlet } from 'react-router';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productsSlice';

import 'bulma/css/bulma.css';
import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import './App.scss';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="body-ajustment">
      <Header />
      <main className="main">
        <Outlet />
        <ProductDetailsPage />
      </main>
      <Footer />
    </div>
  );
};
