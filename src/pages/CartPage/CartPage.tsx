import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../components/CartItem/CartItem';
import { useEffect, useMemo, useState } from 'react';
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
  console.log(cart)

  const isCartNotEmpty =   !!cart.length;


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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
      <div className='cart _container'>
        <h1 className="titleMain cart__title">Cart</h1>

        {!isCartNotEmpty ?
          <div className="cart__background">
            <h2 className="cart__background__title">Your cart is empty</h2>
          </div>
        : <>
            <div className="cart-block">
              <div className="cart-block__list">
                {isCartNotEmpty &&
                  cart.map((product) => (
                    <CartItem
                      key={product.id}
                      product={product}
                    />
                  ))}
              </div>

              {isCartNotEmpty && (
                <div className="checkout-block">
                  <h2 className="checkout-block__header-title">${totalPrice}</h2>
                  <p className="checkout-block__products-quantity">for {totalQuantity} products</p>
                  <button
                    className="checkout-block__button main-button"
                    onClick={() => handleOpenModal()}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </>
        }
      </div>
      {isModalOpen && (
        <CheckoutModal
          productsList={cart}
          totalPrice={totalPrice}
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
