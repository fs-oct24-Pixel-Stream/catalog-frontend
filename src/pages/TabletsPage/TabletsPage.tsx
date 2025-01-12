import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import './TabletsPage.scss';
import { Outlet } from 'react-router';
import { ProductsPage } from '../../components/ProductsPage';

export const TabletsPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const tablets = useMemo(() => {
    return products.filter((product) => product.category === 'tablets');
  }, [products]);
  return (
    <>
      <div>Phones</div>
      <ProductsPage products={tablets} />
      <Outlet />
    </>
  );
};
