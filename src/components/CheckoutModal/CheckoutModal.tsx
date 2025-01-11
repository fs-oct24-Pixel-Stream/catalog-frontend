import { useNavigate } from 'react-router';
import { ProductType } from '../../utils/types/ProductType';
import './CheckoutModal.scss';

type Props = {
  setIsModalOpen: (param: boolean) => void;
  productsList: ProductType[];
};

export const CheckoutModal: React.FC<Props> = (props) => {
  const { setIsModalOpen } = props;
  const navigate = useNavigate();

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
              <thead>
                <tr>
                  <th>product name</th>
                  <th>quantity</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody>
                {props.productsList.map((product) => {
                  return (
                    <tr key={product.id}>
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
            <div className="buttons">
              <button
                className="choice-button choice-button-confirm"
                onClick={() => {
                  navigate('/');
                }}
              >
                Confirm
              </button>
              <button
                className="choice-button choice-button-cancel"
                onClick={() => {
                  setIsModalOpen(false);
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
