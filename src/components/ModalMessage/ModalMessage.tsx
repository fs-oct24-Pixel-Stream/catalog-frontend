import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './ModalMessage.scss';

type Props = {
  setIsPurchased: (value: boolean) => void;
  text: string;
};

export const ModalMessage: React.FC<Props> = ({ setIsPurchased, text }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPurchased(false);
      navigate('/');
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [setIsPurchased, navigate]);
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background">
        <header className="head">
          <p className="modal-card-title">{text}</p>
        </header>
        </div>
        
      </div>
    </>
  );
};
