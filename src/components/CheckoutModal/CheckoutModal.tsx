import { ProductCardType } from '../../utils/types/ProductCardType';
import { CheckoutCartItem } from '../CheckoutCartItem/CheckoutCartItem';
import './CheckoutModal.scss';

type Props = {
  handleCloseModal: (option: string) => void;
  productsList: ProductCardType[];
};

export const CheckoutModal: React.FC<Props> = (props) => {
  const { handleCloseModal, productsList } = props;
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <h1 className="modal-card-title">Confirm your order</h1>
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
            <div className="buttons">
              <div className="confirm">
                <div className="price-block">
                  <p>Total price:$/₴0000</p>
                </div>

                <button
                  className="choice-button choice-button-confirm"
                  onClick={() => {
                    handleCloseModal('succsess');
                  }}
                >
                  Confirm
                </button>
              </div>

              <div className="cancel">
                <button
                  className="choice-button choice-button-cancel"
                  onClick={() => {
                    handleCloseModal('close');
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
