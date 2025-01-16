import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductsPage } from '../../components/ProductsContent';
import './PhonesPage.scss';

import { fetchPhones } from '../../features/phones/phonesSlice';
import { Outlet } from 'react-router';

export const PhonesPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const phones = useMemo(() => {
    return products.filter((product) => product.category === 'phones');
  }, [products]);

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <>
      <ProductsPage products={phones} />
      <Outlet />
    </>
  );
};
