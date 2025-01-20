import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useAppSelector } from '../../app/hooks';
import { ProductCardType } from '../../utils/types/ProductCardType';

import { CheckoutCartItem } from '../CheckoutCartItem/CheckoutCartItem';

import './CheckoutModal.scss';

type Props = {
  handleCloseModal: (option: string) => void;
  productsList: ProductCardType[];
  totalPrice: number;
  isOpen: boolean;
};
export const CheckoutModal: React.FC<Props> = (props) => {
  const { handleCloseModal, productsList, totalPrice, isOpen } = props;
  const isDarkTheme = useAppSelector((state) => state.theme.theme) === 'dark';
  const { t } = useTranslation();
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className="modal is-active">
        <div
          className="modal-background"
          onClick={() => {
            handleCloseModal('close');
          }}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <h1 className="modal-card-title">{t('checkoutConfirm')}</h1>
          </header>
          <section className="modal-card-body">
            {productsList.map((product) => {
              return (
                <CheckoutCartItem
                  key={product.id}
                  quantity={product.quantity}
                  product={product}
                />
              );
            })}
          </section>

          <footer className="modal-card-foot">
            <div className="price-block">
              <p className="price-block__text">
                {t('totalPrice')}: <span>${totalPrice}</span>
              </p>
            </div>
            <div className="buttons">
              <div className="confirm">
                <button
                  className={cn('choice-button choice-button-confirm btn', {
                    'btn--dark': isDarkTheme,
                  })}
                  onClick={() => {
                    handleCloseModal('succsess');
                  }}
                >
                  {t('confirm')}
                </button>
              </div>
              <div className="cancel">
                <button
                  className={cn('choice-button choice-button--close choice-button-cancel btn', {
                    'btn--dark': isDarkTheme,
                  })}
                  onClick={() => {
                    handleCloseModal('close');
                  }}
                >
                  {t('cancel')}
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
