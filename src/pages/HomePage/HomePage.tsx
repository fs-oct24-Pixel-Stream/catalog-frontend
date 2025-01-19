import { NewModelSection } from '../../components/NewModelSection';
import './HomePage.scss';
import { CategorySection } from '../../components/CategorySection/CategorySection';
import { HotPriceSection } from '../../components/HotPriceSection';
import { PromoSection } from '../../components/PromoSection';
import { useAppSelector } from '../../app/hooks';
import { CategorySectionSkeleton } from '../../components/Skeletons/CategorySectionSkeleton/CategorySectionSkeleton';

export const HomePage = () => {
  const isLoading = useAppSelector((state) => state.products.loading);

  return (
    <div className="home-page">
      <h1 className="_container titleMain home-page__title">Welcome to Nice Gadgets store!</h1>

      <div className="home-page__sections">
        <PromoSection />
      </div>

      <div className="_container">
        <div className="home-page__sections">
          <NewModelSection />
        </div>

        <div className="home-page__sections">
          {isLoading ?
            <CategorySectionSkeleton />
          : <CategorySection />}
        </div>

        <div className="home-page__sections">
          <HotPriceSection />
        </div>
      </div>
    </div>
  );
};
