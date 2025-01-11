import { useEffect } from 'react';

type Props = {
  setIsPurchased: (value: boolean) => void;
  text: string;
};

export const ModalMessage: React.FC<Props> = ({ setIsPurchased, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPurchased(false);
    }, 2000);
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
            <p className="modal-card-title">{text}</p>
          </header>
        </div>
      </div>
    </>
  );
};
