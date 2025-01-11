import { useState } from 'react';
import { CheckoutModal } from '../../components/CheckoutModal/CheckoutModal';
import './CartPage.scss';
export const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (param: boolean) => {
    setIsModalOpen(param);
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
      <div>CartPage</div>
      <button
        className="button main-button"
        onClick={() => handleOpenModal(true)}
      >
        Checkout
      </button>
      {isModalOpen && (
        <CheckoutModal
          productsList={products}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};
