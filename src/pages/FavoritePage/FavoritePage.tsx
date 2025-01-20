import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../app/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductCard } from '../../components/ProductCard';
import './FavoritePage.scss';
export const FavoritePage = () => {
  const products = useAppSelector((state) => state.favorities.products);
  const isFavoritesEmpty = !!products.length;
  const quantity = products.length;
  const { t } = useTranslation();
  return (
    <>
      <div className="favorites _container container-custom">
        <Breadcrumbs />
        <h1 className="titleMain">{t('favorites')}</h1>
        {!isFavoritesEmpty ?
          <div className="favorites__background">
            <h2 className="favorites__background__title">Your list of favorites items are empty</h2>
          </div>
        : <>
            <p className="favorites__items-quantity">
              {quantity} {t('items')}
            </p>
            <div className="favorites__list productList">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </>
        }
      </div>
    </>
  );
};
