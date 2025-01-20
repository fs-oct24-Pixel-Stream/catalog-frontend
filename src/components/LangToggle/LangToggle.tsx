import './LangToggle.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setLanguage } from '../../features/languages/languagesSlice';
import { useTranslation } from 'react-i18next';

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
    <button
      className="lang-button"
      onClick={handleChange}
    >
      {currLanguage.toUpperCase()}
    </button>
  );
};
