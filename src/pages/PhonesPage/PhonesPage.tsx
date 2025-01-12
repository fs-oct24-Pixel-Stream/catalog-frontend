import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { ProductsPage } from '../../components/ProductsPage';
import './PhonesPage.scss';
import { Outlet } from 'react-router';

export const PhonesPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const phones = useMemo(() => {
    return products.filter((product) => product.category === 'phones');
  }, [products]);
  return (
    <>
      <div>Phones</div>
      <ProductsPage products={phones} />
      <Outlet />
    </>
  );
};
