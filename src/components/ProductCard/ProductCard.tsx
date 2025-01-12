import React, { useState } from 'react';
import './ProductCard.scss';
import { Link } from 'react-router';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { useAppDispatch } from '../../app/hooks';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import cn from 'classnames';

type Props = {
  product: ProductCardType;
};
export const ProductCard: React.FC<Props> = ({ product }) => {
  const capacity = product.capacity.slice(0, -2);
  const ram = product.ram.slice(0, -2);
  const [inCart, setInCart] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleBuyProduct = () => {
    if (inCart === product.id) {
      setInCart(null);
      dispatch(removeProduct(product.id));
    } else {
      setInCart(product.id);
      dispatch(addProduct(product));
    }
  };

  return (
    <div className="card">
      <Link to={`${product.id}`}>
        <img
          src={`${product.image}`}
          alt="Placeholder image"
          className="card__image"
        />
      </Link>

      <div className="is-flex is-justify-content-space-between card__title">
        <Link
          to={`${product.id}`}
          className="card__title__text"
        >
          {product.name}
        </Link>
      </div>

      <div className="is-flex card__price">
        <h2 className="card__price__value">{product.price}</h2>
        <h2 className="card__price__value__discount">$999</h2>
      </div>

      <div className="card__line"></div>

      <div className="card__descriptions">
        <div className="is-flex is-justify-content-space-between">
          <h3 className="card__descriptions__text card__descriptions__mb">Screen</h3>
          <h3 className="card__descriptions__value">{product.screen}</h3>
        </div>

        <div className="is-flex is-justify-content-space-between">
          <h3 className="card__descriptions__text card__descriptions__mb">Capacity</h3>
          <h3 className="card__descriptions__value">{capacity} GB</h3>
        </div>

        <div className="is-flex is-justify-content-space-between">
          <h3 className="card__descriptions__text">RAM</h3>
          <h3 className="card__descriptions__value">{ram} GB</h3>
        </div>
      </div>

      <div className="is-flex is-justify-content-space-between card__buttons">
        <button
          onClick={handleBuyProduct}
          className={cn('button', {
            'card__button__buy': inCart !== product.id,
            'card__button--active': inCart === product.id,
          })}
        >
          Add to cart
        </button>
        <button className="button card__button__wishlist"></button>
      </div>
    </div>
  );
};
