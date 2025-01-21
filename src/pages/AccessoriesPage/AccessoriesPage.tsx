import { useMemo } from 'react';

import { useAppSelector } from '../../app/hooks';

import { ProductsPage } from '../../components/ProductsPage';

import './AccessoriesPage.scss';

export const AccessoriesPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const accessories = useMemo(() => {
    return products.filter((product) => product.category === 'accessories');
  }, [products]);

  return (
    <>
      <ProductsPage products={accessories} />
    </>
  );
};
