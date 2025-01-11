import { ProductType } from '../../utils/types/ProductType';
import './CheckoutModal.scss';

type Props = {
  handleCloseModal: (option: string) => void;
  productsList: ProductType[];
};

export const CheckoutModal: React.FC<Props> = (props) => {
  const { handleCloseModal, productsList } = props;

  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Confirm and complete your order</p>
          </header>
          <section className="modal-card-body">
            <table className="content">
              <thead className="table-header">
                <tr className="table-header__row">
                  <th>product name</th>
                  <th>quantity</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {productsList.map((product) => {
                  return (
                    <tr
                      key={product.id}
                      className="table-body__row"
                    >
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
          <footer className="modal-card-foot">
            <div className="price-block">
              <p>Total price:$/₴0000</p>
            </div>
            <div className="buttons">
              <button
                className="choice-button choice-button-confirm"
                onClick={() => {
                  handleCloseModal('succsess');
                }}
              >
                Confirm
              </button>
              <button
                className="choice-button choice-button-cancel"
                onClick={() => {
                  handleCloseModal('close');
                }}
              >
                Cancel
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
