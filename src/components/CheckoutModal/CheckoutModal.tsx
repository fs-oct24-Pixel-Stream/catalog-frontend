import './CheckoutModal.scss';

type Props = {
  setIsModalOpen: (param: boolean) => void;
};

export const CheckoutModal: React.FC<Props> = (props) => {
  const { setIsModalOpen } = props;

  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Confirm and complete your order</p>
            <button
              className="delete modal_"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <table className="content">
              <thead>
                <tr>
                  <th>product name</th>
                  <th>puantity</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Товар 1</td>
                  <td>5</td>
                  <td>100.</td>
                </tr>
                <tr>
                  <td>Товар 2</td>
                  <td>3</td>
                  <td>200.</td>
                </tr>
                <tr>
                  <td>Товар 3</td>
                  <td>10</td>
                  <td>50.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className="choice-button choice-button-confirm">Confirm</button>
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
