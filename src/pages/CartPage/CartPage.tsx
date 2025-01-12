import { useState } from 'react';
import { CheckoutModal } from '../../components/CheckoutModal/CheckoutModal';
import './CartPage.scss';
import { ModalMessage } from '../../components/ModalMessage/ModalMessage';
import { CartItem } from '../../components/CartItem/CartItem';
export const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const succsessModalWindowText = 'Thank you for your purchase!';

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsPurchased(false);
  };

  const handleCloseModal = (option: string) => {
    if (option === 'close') {
      setIsModalOpen(false);
      return;
    } else {
      setIsModalOpen(false);
      setIsPurchased(true);
    }
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 2,
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 1,
      price: 50,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 3,
      price: 150,
    },
    {
      id: 4,
      name: 'Product 4',
      quantity: 4,
      price: 200,
    },
    {
      id: 5,
      name: 'Product 5',
      quantity: 5,
      price: 250,
    },
    {
      id: 6,
      name: 'Product 6',
      quantity: 6,
      price: 300,
    },
    {
      id: 6,
      name: 'Product 6',
      quantity: 6,
      price: 300,
    },
    {
      id: 6,
      name: 'Product 6',
      quantity: 6,
      price: 300,
    },
    {
      id: 6,
      name: 'Product 6',
      quantity: 6,
      price: 300,
    },
    {
      id: 6,
      name: 'Product 6',
      quantity: 6,
      price: 300,
    },
    {
      id: 6,
      name: 'Product 6',
      quantity: 6,
      price: 300,
    },
    {
      id: 6,
      name: 'Product 6',
      quantity: 6,
      price: 300,
    },
  ];
  return (
    <>
      <div className="_container">
        <p>breadcrumbs</p>
        <h1 className="titleMain">Cart</h1>

        <main className="main-block">
          <div className="cart-block">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="checkout-block">
            <div className="checkout-block__header">
              <h1 className="checkout-block__header-title">$1111</h1>
              <p className="checkout-block__header-text">Total for 0 items</p>
            </div>
            <button
              className="button main-button checkout-block__button"
              onClick={handleOpenModal}
            >
              Checkout
            </button>
          </div>
        </main>

        {isModalOpen && (
          <CheckoutModal
            productsList={products}
            handleCloseModal={handleCloseModal}
          />
        )}
        {isPurchased && (
          <ModalMessage
            text={succsessModalWindowText}
            setIsPurchased={setIsPurchased}
          />
        )}
      </div>
    </>
  );
};
