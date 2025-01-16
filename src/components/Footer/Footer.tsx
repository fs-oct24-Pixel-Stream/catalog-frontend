import { Link } from 'react-router';
import './Footer.scss';
import { ScrollButton } from '../ScrollButton';
import { footerButtons } from '../../utils/constants/footerButtons';
import { correctTitle } from '../../utils/functions/correctTitle';
import { handleBackToTop } from '../../utils/functions/handleBackToTop';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="_container footer-content has-text-centered">
        <div className="footer-logo">
          <Link
            to="/home"
            className="footer-logo--link"
          >
            <img
              src="./img/icons/Logo.svg"
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
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-back-to-top">
        <ScrollButton />
      </div>
    </footer>
  );
};
