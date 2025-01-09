import { useNavigate } from 'react-router';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const OneStepBackHandler = () => navigate(-1);

  return (
    <div className="_container">
      <div className="page-not-found">
        <h1 className=" title page-not-found__title">Page not found</h1>
        <p className="page-not-found__description">
          {
            "Sorry, the page you're looking for doesn't exist. Please correct your URL or return to the latest page you visited via our cool and helpful back button."
          }
        </p>
        <button
          className="page-not-found__back-button"
          onClick={OneStepBackHandler}
        >
          Back
        </button>
      </div>
    </div>
  );
};
