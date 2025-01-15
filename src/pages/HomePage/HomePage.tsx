import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { NewModelSection } from '../../components/NewModelSection';
import './HomePage.scss';
// import { fetchProducts } from '../../features/products/productsSlice';
import { CategorySection } from '../../components/CategorySection/CategorySection';
import { HotPriceSection } from '../../components/HotPriceSection';
import { PromoSection } from '../../components/PromoSection';

export const HomePage = () => {
  // const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const filterProductsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  const phones = useMemo(() => filterProductsByCategory('phones'), [products]);
  const tablets = useMemo(() => filterProductsByCategory('tablets'), [products]);
  const accessories = useMemo(() => filterProductsByCategory('accessories'), [products]);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  return (
    <div className="home-page">
      <h1 className="_container titleMain home-page__title">Welcome to Nice Gadgets store!</h1>

      <div className="home-page__sections">
        <PromoSection />
      </div>

      <div className="_container">
        <div className="home-page__sections">
          <NewModelSection products={products} />
        </div>

        <div className="home-page__sections">
          <CategorySection
            phones={phones}
            tablets={tablets}
            accessories={accessories}
          />
        </div>

        <div className="home-page__sections">
          <HotPriceSection products={products} />
        </div>
      </div>
    </div>
  );
};
