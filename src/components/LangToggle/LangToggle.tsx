import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setLanguage } from '../../features/languages/languagesSlice';

import './LangToggle.scss';

export const LangToggle = () => {
  const currLanguage = useAppSelector((state) => state.language.lang);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (currLanguage === 'en') {
      dispatch(setLanguage('ua'));
      i18n.changeLanguage('ua');
    } else {
      dispatch(setLanguage('en'));
      i18n.changeLanguage('en');
    }
  };

  return (
    <div
      className="icons-language icon-container"
      onClick={handleChange}
    >
      <button
        className="lang-button"
        onClick={handleChange}
      >
        {currLanguage.toUpperCase()}
      </button>
    </div>
  );
};
