import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import './TabletsPage.scss';
import { ProductsPage } from '../../components/ProductsPage';

export const TabletsPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const tablets = useMemo(() => {
    return products.filter((product) => product.category === 'tablets');
  }, [products]);

  return (
    <>
      <ProductsPage products={tablets} />
    </>
  );
};
