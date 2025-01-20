import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductsPage } from '../../components/ProductsPage';
import { fetchPhones } from '../../features/phones/phonesSlice';

import './PhonesPage.scss';

export const PhonesPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const phones = useMemo(() => {
    return products.filter((product) => product.category === 'phones');
  }, [products]);
  useEffect(() => {
    dispatch(fetchPhones());
  }, []);
  return (
    <>
      <ProductsPage products={phones} />
    </>
  );
};
