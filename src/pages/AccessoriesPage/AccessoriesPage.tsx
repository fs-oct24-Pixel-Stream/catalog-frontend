import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import './AccessoriesPage.scss';
import { ProductsPage } from '../ProductsPage';
import { Outlet } from 'react-router';

export const AccessoriesPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const accessories = useMemo(() => {
    return products.filter((product) => product.category === 'accessories');
  }, [products]);
  return (
    <>
      <div>Phones</div>
      <ProductsPage products={accessories} />
      <Outlet />
    </>
  );
};
