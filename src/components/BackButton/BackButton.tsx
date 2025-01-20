import { useLocation, useNavigate } from 'react-router';

import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      const category = location.pathname.split('/')[1];

      navigate(`/${category}`);
    }
  };

  return (
    <button
      className="back-button"
      onClick={handleNavigate}
    >
      <div className="back-button__icon"></div>
      <span>Back</span>
    </button>
  );
};
