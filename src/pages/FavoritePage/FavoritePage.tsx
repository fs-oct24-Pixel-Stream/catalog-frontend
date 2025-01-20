import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../app/hooks';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductCard } from '../../components/ProductCard';
import './FavoritePage.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <TransitionGroup className="favorites__list productList">
              {products.map((product) => (
                <CSSTransition
                  key={product.id}
                  timeout={500}
                  classNames="favoriteItem"
                  unmountOnExit
                >
                  <ProductCard product={product} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </>
        }
      </div>
    </>
  );
};
