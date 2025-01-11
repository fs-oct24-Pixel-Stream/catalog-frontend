import { useEffect } from 'react';

type Props = {
  setIsPurchased: (value: boolean) => void;
};

export const ModalMessage: React.FC<Props> = ({ setIsPurchased }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPurchased(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Thank you for your order</p>
          </header>
        </div>
      </div>
    </>
  );
};
