import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './ModalMessage.scss';

type Props = {
  setIsPurchased: (value: boolean) => void;
};

export const ModalMessage: React.FC<Props> = ({ setIsPurchased }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPurchased(false);
      navigate('/');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setIsPurchased, navigate]);
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background">
          <div className="head">
            <div className="road">
              <img
                src="img/icons/delivery.gif"
                alt="truck"
                className="movingTruck"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
