import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { NewModelSection } from '../../components/NewModelSection';
import './HomePage.scss';
import { fetchProducts } from '../../features/products/productsSlice';
import { CategorySection } from '../../components/CategorySection/CategorySection';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <NewModelSection products={products} />
      <CategorySection />
    </>
  );
};
