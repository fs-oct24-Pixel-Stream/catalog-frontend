import { useMemo } from 'react'; //useEffect
import { useAppSelector } from '../../app/hooks';
import { ProductsPage } from '../../components/ProductsPage';
import './PhonesPage.scss';

// import { fetchPhones } from '../../features/phones/phonesSlice';

export const PhonesPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const phones = useMemo(() => {
    return products.filter((product) => product.category === 'phones');
  }, [products]);

  // useEffect(() => {
  //   dispatch(fetchPhones());
  // }, []);

  return (
    <>
      <ProductsPage products={phones} />
    </>
  );
};
