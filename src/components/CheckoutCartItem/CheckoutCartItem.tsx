import React from 'react';
import './CheckoutCartItem.scss';
import { ProductCardType } from '../../utils/types/ProductCardType';

type Props = {
  product: ProductCardType;
  quantity: number;
};

export const CheckoutCartItem: React.FC<Props> = ({ product, quantity }) => {
  return (
    <div className="is-flex cart-item checkout-cart-item ">
      <div className="is-flex is-justify-content-space-between is-align-items-center cart-item__header">
        <div className="is-flex is-align-items-center cart-item__image-container">
          <a
            href={`/product/${product.id}`}
            className="cart-item__image-url"
          >
            <img
              src={product.image}
              className="cart-item__image"
              alt={product.name}
            />
          </a>
        </div>

        <a
          href={`/product/${product.id}`}
          className="title cart-item__title"
        >
          {product.name}
        </a>
      </div>

      <div className="is-flex is-justify-content-space-between is-align-items-center cart-item__footer">
        <div className="is-flex is-align-items-center cart-item__quantity-controls">

          <span className="cart-item__quantity">{quantity}</span>
        </div>

        <p className="cart-item__price">${(product.price * quantity)}</p>
      </div>
    </div>
  );
};
