import React, { useState } from 'react';
import './ProductCard.scss';
import { Link } from 'react-router';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import cn from 'classnames';
import { IconButton } from '../IconButton/IconButton';
import { addFavorite, removeFavorite } from '../../features/favorites/favoritiesSlice';

type Props = {
  product: ProductCardType;
};
export const ProductCard: React.FC<Props> = ({ product }) => {
  const [inCart, setInCart] = useState<number | null>(null);
  const [inFavorite, setInFavorite] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const capacity = product.capacity.slice(0, -2);
  const ram = product.ram.slice(0, -2);

  const getButtonText = (isInCart: boolean): string => {
    return isInCart ? 'Added to cart' : 'Add to cart';
  };

  const handleBuyProduct = () => {
    if (inCart === product.id) {
      setInCart(null);
      dispatch(removeProduct(product.id));
    } else {
      setInCart(product.id);
      dispatch(addProduct(product));
    }
  };

  const handleAddFavorite = () => {
    if (inFavorite === product.id) {
      setInFavorite(null);
      dispatch(removeFavorite(product.id));
    } else {
      setInFavorite(product.id);
      dispatch(addFavorite(product));
    }
  };

  const favorite = useAppSelector((state) => state.favorities.products);
  console.log(favorite);
  return (
    <div className="is-flex is-flex-direction-column is-justify-content-space-between product-card">
      <Link to={`${product.itemId}`}>
        <img
          src={`${product.image}`}
          alt="Placeholder image"
          className="product-card__image"
        />
      </Link>

      <Link to={`${product.itemId}`}>
        <h2 className="product-card__title">{product.name}</h2>
      </Link>

      <div className="is-flex product-card__price">
        <p className="product-card__price-value">${product.price}</p>
        <p className="product-card__price-value product-card__price-value--discount">
          ${product.fullPrice}
        </p>
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
          className={cn('button', {
            'product-card__button-buy': inCart !== product.id,
            'product-card__button-buy--active': inCart === product.id,
          })}
        >
          {getButtonText(inCart === product.id)}
        </button>
        <IconButton
          onClick={handleAddFavorite}
          className={cn({
            'product-card__button-wishlist': inFavorite !== product.id,
            'product-card__button-wishlist--active': inFavorite === product.id,
          })}
        />
      </div>
    </div>
  );
};
