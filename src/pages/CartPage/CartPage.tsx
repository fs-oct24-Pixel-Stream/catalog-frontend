import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CartItem } from '../../components/CartItem/CartItem';
import { useMemo, useState } from 'react';
import { CheckoutModal } from '../../components/CheckoutModal/CheckoutModal';
import './CartPage.scss';
import { ModalMessage } from '../../components/ModalMessage/ModalMessage';
import { clearAllProducts } from '../../features/cart/cartSlice';
import cn from 'classnames';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { useTranslation } from 'react-i18next';

export const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const { t } = useTranslation();

  const darkTheme = useAppSelector((state) => state.theme.theme) === 'dark';
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsPurchased(false);
  };

  const cart = useAppSelector((state) => state.cart.cart);

  const handleCloseModal = (option: string) => {
    if (option === 'close') {
      setIsModalOpen(false);
      return;
    } else if (option === 'succsess') {
      setIsModalOpen(false);
      setIsPurchased(true);
      dispatch(clearAllProducts());
    }
  };

  const isCartNotEmpty = !!cart.length;

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
        <Breadcrumbs />
        <h1 className="titleMain cart__title">{t('cart')}</h1>

        {!isCartNotEmpty ?
          <div className="cart__background">
            <h2 className="cart__background__title">{t('emptyCart')}</h2>
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
                  <p className="checkout-block__products-quantity">
                    {t('totalFor')} {totalQuantity} {t(totalQuantity > 1 ? 'items' : 'item')}
                  </p>
                  <button
                    className={cn('button product-card__button-buy checkout-block__check btn', {
                      'btn--dark': darkTheme,
                    })}
                    onClick={() => handleOpenModal()}
                  >
                    {t('checkout')}
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
          isOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
      {isPurchased && <ModalMessage setIsPurchased={setIsPurchased} />}
    </>
  );
};
