import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductsPage } from '../../components/ProductsPage';
import { fetchTablets } from '../../features/tablets/tabletsSlice';

import './TabletsPage.scss';

export const TabletsPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const tablets = useMemo(() => {
    return products.filter((product) => product.category === 'tablets');
  }, [products]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTablets());
  }, []);
  return (
    <>
      <ProductsPage products={tablets} />
    </>
  );
};
