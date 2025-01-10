import './CheckoutModal.scss';
export const CheckoutModal = () => {
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">{/* <!-- Content ... --> */}</section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className="choice-button choice-button-confirm">Confirm</button>
              <button className="choice-button choice-button-cancel">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
