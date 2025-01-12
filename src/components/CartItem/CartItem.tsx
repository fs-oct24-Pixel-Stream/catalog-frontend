import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
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
    dispatch(decreaseProduct(product));
  };

  const handleDeleteProduct = () => {
    dispatch(removeProduct(product.id));
  };

  const cart = useAppSelector((state) => state.cart.cart);
  console.log(cart);
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
              src="https://s3-alpha-sig.figma.com/img/4036/d779/98ea87fdcb4fe9b1d62dd9629b0b820f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dW0Qq4841iTFau5uqnnAA8anxDFnDtFNxKGq92Uq9fGG5jTIO5TEVGYRN0rnS7B-qgUQVa44SikVlxvAs7d3wEGY7kaJqdbmC3fxWDww~nj4IDEis1AMBLdxh49jt~TncmMVVfioxN6IgQdC3E0j7L8mo4V8UBCyhjsmuG60QNIYRTtErWml4CVhLLNfOIQEluMfilexyX9BmS3QT48rso6j-EkWHgzY5z7Za6YYXPo0KPrNT7AcQ8wW6FTsIXq3TR6BHl-Xjy0WjGWeUPNaPFVZSDyh5Bti5ZNnAIKMIo5pBRyop78~e40vaGawtIY~aJ4ZJWwYiidxAos1038RNQ__"
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

        <p className="cart-item__price">$999</p>
      </div>
    </div>
  );
};
