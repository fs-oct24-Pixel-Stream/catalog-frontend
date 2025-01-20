import React from 'react';

import { Link } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { decreaseProduct, increaseProduct, removeProduct } from '../../features/cart/cartSlice';

import { IconButton } from '../IconButton/IconButton';
import { ProductCardType } from '../../utils/types/ProductCardType';
import './CartItem.scss';

type Props = {
  product: ProductCardType;
};
export const CartItem: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const handleIncrease = () => {
    dispatch(increaseProduct(product));
  };

  const handleDecrease = () => {
    if (product.quantity === 1) {
      dispatch(removeProduct(product.id));
    }
    dispatch(decreaseProduct(product));
  };

  const handleDeleteProduct = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="is-flex cart-item">
      <div className="is-flex is-justify-content-space-between is-align-items-center cart-item__header">
        <div className="is-flex is-align-items-center cart-item__image-container">
          <button
            onClick={handleDeleteProduct}
            className="cart-item__remove-button"
          ></button>

          <Link
            to={`/${product.category}/${product.itemId}`}
            className="cart-item__image-url"
          >
            <img
              src={product.image}
              className=" cart-item__image"
              alt="Placeholder image"
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
          <IconButton
            onClick={handleDecrease}
            backgroundImage="img/icons/Minus.svg"
          />

          <span className="cart-item__quantity">{product.quantity}</span>

          <IconButton
            onClick={handleIncrease}
            backgroundImage={theme === 'light' ? 'img/icons/Plus.svg' : 'img/icons/PlusWhite.svg'}
          />
        </div>

        <p className="cart-item__price">${product.price * product.quantity}</p>
      </div>
    </div>
  );
};
