import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './TabletsPage.scss';
import { ProductsPage } from '../../components/ProductsContent';
import { fetchTablets } from '../../features/tablets/tabletsSlice';

export const TabletsPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const tablets = useMemo(() => {
    return products.filter((product) => product.category === 'tablets');
  }, [products]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTablets());
  }, [dispatch]);
  return (
    <>
      <ProductsPage products={tablets} />
    </>
  );
};
