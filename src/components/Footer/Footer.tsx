import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { footerButtons } from '../../utils/constants/footerButtons';
import { correctTitle } from '../../utils/functions/correctTitle';
import { handleBackToTop, quicklyBackToTop } from '../../utils/functions/handleBackToTop';
import { useAppSelector } from '../../app/hooks';

import { ScrollButton } from '../ScrollButton';

import './Footer.scss';

export const Footer = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="_container footer-content has-text-centered">
        <div className="footer-logo">
          <Link
            to="/"
            className="footer-logo--link"
            onClick={quicklyBackToTop}
          >
            <img
              src={theme === 'light' ? './img/icons/Logo.svg' : './img/icons/LogoWhite.svg'}
              alt="Nice Gadgets Logo"
              className="logo"
            />
          </Link>
        </div>

        <div>
          <ul className="footer-links">
            {footerButtons.map((button) => {
              const text = correctTitle(button);
              return (
                <li
                  key={button}
                  className="footer-link-item"
                >
                  <Link
                    to={`/${button}`}
                    className="footer-link"
                    onClick={handleBackToTop}
                  >
                    {t(text)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-back-to-top">
          <ScrollButton />
        </div>
      </div>
    </footer>
  );
};
