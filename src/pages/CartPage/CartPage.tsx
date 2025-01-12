import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../components/CartItem/CartItem';
import { useMemo, useState } from 'react';
import { CheckoutModal } from '../../components/CheckoutModal/CheckoutModal';
import './CartPage.scss';
import { ModalMessage } from '../../components/ModalMessage/ModalMessage';
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


  const totalPrice = useMemo(() => {
    return cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }, [cart]);
  
  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
  }, [cart]);

  

  
  return (
    <>
      <div className="cart _container">
        <div className="cart-block">
          <div className="cart-block__list">
            {!!cart.length &&
              cart.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                />
              ))}
          </div>

          {!!cart.length && (
            <div className="checkout-block">
              <h2 className="checkout-block__header-title">${totalPrice}</h2>
            <p className="checkout-block__products-quantity">for {totalQuantity} products</p>
            <button
              className="button main-button"
              onClick={() => handleOpenModal()}
            >
              Checkout
            </button>
          </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <CheckoutModal
          productsList={cart}
          handleCloseModal={handleCloseModal}
        />
      )}
      {isPurchased && (
        <ModalMessage
          text={succsessModalWindowText}
          setIsPurchased={setIsPurchased}
        />
      )}
    </>
  );
};
