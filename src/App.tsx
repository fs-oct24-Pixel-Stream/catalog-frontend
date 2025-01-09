import { Outlet } from 'react-router';
import './App.scss';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      {/* TODO ADD Header */}
      header
      <Outlet />
      footer
      {/* TODO ADD Footer */}
      <ProductCard />
      <Footer />
    </>
  );
};
