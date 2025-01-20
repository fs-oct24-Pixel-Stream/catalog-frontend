import React from 'react';
import { Link } from 'react-router';

import { ProductCardType } from '../../utils/types/ProductCardType';

import './CheckoutCartItem.scss';

type Props = {
  product: ProductCardType;
  quantity: number;
};

export const CheckoutCartItem: React.FC<Props> = ({ product, quantity }) => {
  return (
    <div className="is-flex cart-item checkout-cart-item ">
      <div className="is-flex is-justify-content-space-between is-align-items-center cart-item__header">
        <div className="is-flex is-align-items-center cart-item__image-container">
          <Link
            to={`/${product.category}/${product.itemId}`}
            className="cart-item__image-url"
          >
            <img
              src={product.image}
              className="cart-item__image"
              alt={product.name}
            />
          </Link>
        </div>

        <Link
          to={`/${product.category}/${product.itemId}`}
          className="title cart-item__title"
        >
          {product.name}
        </Link>
      </div>

      <div className="is-flex is-justify-content-space-between is-align-items-center cart-item__footer">
        <div className="is-flex is-align-items-center cart-item__quantity-controls">
          <span className="cart-item__quantity">{quantity}</span>
        </div>

        <p className="cart-item__price">${product.price * quantity}</p>
      </div>
    </div>
  );
};
