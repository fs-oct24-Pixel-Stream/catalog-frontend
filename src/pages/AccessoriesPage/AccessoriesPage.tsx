import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchAccessories } from '../../features/accessories/accessoriesSlice';

import { ProductsPage } from '../../components/ProductsPage';

import './AccessoriesPage.scss';

export const AccessoriesPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const accessories = useMemo(() => {
    return products.filter((product) => product.category === 'accessories');
  }, [products]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAccessories());
  }, []);
  return (
    <>
      <ProductsPage products={accessories} />
    </>
  );
};
