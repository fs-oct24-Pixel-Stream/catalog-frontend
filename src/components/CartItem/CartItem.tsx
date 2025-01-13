import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { decreaseProduct, increaseProduct, removeProduct } from '../../features/cart/cartSlice';
import { IconButton } from '../IconButton/IconButton';
import './CartItem.scss';
import { ProductCardType } from '../../utils/types/ProductCardType';

type Props = {
  product: ProductCardType;
};
export const CartItem: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(increaseProduct(product));
  };

  const handleDecrease = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
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

          <a
            href="#"
            className="cart-item__image-url"
          >
            <img
              src={product.image}
              className=" cart-item__image"
              alt="Placeholder image"
            />
          </a>
        </div>

        <a
          href="#"
          className="title cart-item__title"
        >
          {product.name}
        </a>
      </div>

      <div className="is-flex is-justify-content-space-between is-align-items-center cart-item__footer">
        <div className="is-flex is-align-items-center cart-item__quantity-controls">
          <IconButton
            onClick={handleDecrease}
            backgroundImage="../../../public/img/icons/Minus.svg"
          />

          <span className="cart-item__quantity">{quantity}</span>

          <IconButton
            onClick={handleIncrease}
            backgroundImage="../../../public/img/icons/Plus.svg"
          />
        </div>

        <p className="cart-item__price">${product.price * quantity}</p>
      </div>
    </div>
  );
};
