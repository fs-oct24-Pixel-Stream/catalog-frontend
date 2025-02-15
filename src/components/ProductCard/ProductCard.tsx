import React from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { quicklyBackToTop } from '../../utils/functions/handleBackToTop';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import { addFavorite, removeFavorite } from '../../features/favorites/favoritiesSlice';
import { separeteSpecs } from '../../utils/functions/separeteSpecs';

import { IconButton } from '../IconButton/IconButton';

import './ProductCard.scss';

type Props = {
  product: ProductCardType;
  discount?: boolean;
};
export const ProductCard: React.FC<Props> = ({ product, discount }) => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.theme.theme) === 'dark';
  const cart = useAppSelector((store) => store.cart.cart);
  const isInCart = cart.some((item) => item.id === product.id);

  const { t } = useTranslation();

  const favorites = useAppSelector((store) => store.favorities.products);
  const isInFavorites = favorites.some((item) => item.id === product.id);

  const capacity = product.capacity;
  const ram = product.ram;

  const getButtonText = isInCart ? t('added') : t('addToCart');

  const handleBuyProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isInCart) {
      dispatch(removeProduct(product.id));
    } else {
      dispatch(addProduct(product));
    }
  };

  const handleAddFavorite = () => {
    if (isInFavorites) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  const location = useLocation();

  const handleRedirect = () => {
    if (location.pathname === `/${product.category}`) {
      return `${product.itemId}`;
    } else {
      // quicklyBackToTop()
      return `/${product.category}/${product.itemId}`;
    }
  };

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-space-between product-card">
      <Link to={handleRedirect()}>
        <img
          src={`${product.image}`}
          alt="Placeholder image"
          className="product-card__image"
          onClick={quicklyBackToTop}
        />
      </Link>

      <Link to={handleRedirect()}>
        <h2
          className="product-card__title"
          onClick={quicklyBackToTop}
        >
          {product.name}
        </h2>
      </Link>

      <div className="is-flex product-card__price">
        <p className="product-card__price-value">${product.price}</p>
        {discount && (
          <p className="product-card__price-value product-card__price-value--discount">
            ${product.fullPrice}
          </p>
        )}
      </div>

      <div className="product-card__line"></div>

      <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
        <p className="product-card__descriptions-text">{t('screen')}</p>
        <p className="product-card__descriptions-value">{product.screen}</p>
      </div>

      <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
        {product.category === 'accessories' ?
          <p className="product-card__descriptions-text">{t('Size')}</p>
        : <p className="product-card__descriptions-text">{t('Capacity')}</p>}
        <p className="product-card__descriptions-value">{separeteSpecs(capacity)}</p>
      </div>

      <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
        <p className="product-card__descriptions-text">{t('ram')}</p>
        <p className="product-card__descriptions-value">{separeteSpecs(ram)}</p>
      </div>

      <div className="is-flex is-justify-content-space-between product-card__buttons">
        <button
          onClick={handleBuyProduct}
          className={cn('button product-card__button-buy btn', {
            'product-card__button-buy--active': isInCart,
            'btn--dark': isDarkTheme,
          })}
        >
          {getButtonText}
        </button>
        <IconButton
          onClick={handleAddFavorite}
          className={cn({
            'product-card__button-wishlist': !isInFavorites,
            'product-card__button-wishlist--active': isInFavorites,
          })}
        />
      </div>
    </div>
  );
};
