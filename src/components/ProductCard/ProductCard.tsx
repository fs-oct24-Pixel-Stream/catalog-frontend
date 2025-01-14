import React from 'react';
import { Link } from 'react-router';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import cn from 'classnames';
import { IconButton } from '../IconButton/IconButton';
import { addFavorite, removeFavorite } from '../../features/favorites/favoritiesSlice';
import './ProductCard.scss';

type Props = {
  product: ProductCardType;
  discount?: boolean;
};
export const ProductCard: React.FC<Props> = ({ product, discount }) => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((store) => store.cart.cart);
  const isInCart = cart.some((item) => item.id === product.id);

  const favorites = useAppSelector((store) => store.favorities.products);
  const isInFavorites = favorites.some((item) => item.id === product.id);

  const capacity = product.capacity.slice(0, -2);
  const ram = product.ram.slice(0, -2);

  const getButtonText = isInCart ? 'Added' : 'Add to cart';

  const handleBuyProduct = () => {
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

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-space-between product-card">
      <Link to={`${product.category}/${product.itemId}`}>
        <img
          src={`${product.image}`}
          alt="Placeholder image"
          className="product-card__image"
        />
      </Link>

      <Link to={`${product.category}/${product.itemId}`}>
        <h2 className="product-card__title">{product.name}</h2>
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
        <p className="product-card__descriptions-text">Screen</p>
        <p className="product-card__descriptions-value">{product.screen}</p>
      </div>

      <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
        <p className="product-card__descriptions-text">Capacity</p>
        <p className="product-card__descriptions-value">{capacity} GB</p>
      </div>

      <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
        <p className="product-card__descriptions-text">RAM</p>
        <p className="product-card__descriptions-value">{ram} GB</p>
      </div>

      <div className="is-flex is-justify-content-space-between product-card__buttons">
        <button
          onClick={handleBuyProduct}
          className={cn('button', 'product-card__button-buy', {
            'product-card__button-buy--active': isInCart,
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
