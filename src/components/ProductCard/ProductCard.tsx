import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router';
import { ProductCardType } from '../../utils/types/ProductCardType';

type Props = {
  product: ProductCardType;
};
export const ProductCard: React.FC<Props> = ({ product }) => {
  const capacity = product.capacity.slice(0, -2);
  const ram = product.ram.slice(0, -2);

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
        <button className="button card__button__buy">Add to cart</button>
        <button className="button card__button__wishlist"></button>
      </div>
    </div>
  );
};
