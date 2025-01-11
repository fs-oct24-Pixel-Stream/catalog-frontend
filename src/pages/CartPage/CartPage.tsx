import { useState } from 'react';
import { CheckoutModal } from '../../components/CheckoutModal/CheckoutModal';
import './CartPage.scss';
export const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (param: boolean) => {
    setIsModalOpen(param);
  };

  return (
    <>
      <div>CartPage</div>
      <button
        className="button main-button"
        onClick={() => handleOpenModal(true)}
      >
        Checkout
      </button>
      {isModalOpen && <CheckoutModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};
