import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import './NotFoundPage.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const OneStepBackHandler = () => navigate(-1);

  const { t } = useTranslation();

  return (
    <div className="_container">
      <div className="page-not-found">
        <h1 className=" title page-not-found__title ">Page not found</h1>
        <p className="page-not-found__description">{t('description')}</p>
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
