import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../components/CartItem/CartItem';
import { useState } from 'react';
import { CheckoutModal } from '../../components/CheckoutModal/CheckoutModal';
import './CartPage.scss';
import { ModalMessage } from '../../components/ModalMessage/ModalMessage';
export const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const handleOpenModal = (param: boolean) => {
    setIsModalOpen(param);
    setIsPurchased(isModalOpen ? true : false);
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
