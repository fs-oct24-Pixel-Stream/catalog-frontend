import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../components/CartItem/CartItem';
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

  const cart = useAppSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <>
      {!!cart.length &&
        cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
          />
        ))}
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
      {isPurchased && <ModalMessage setIsPurchased={setIsPurchased} />}
    </>
  );
};
