import { Link } from 'react-router';
import { IconButton } from '../IconButton/IconButton';
import './Footer.scss';
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
            <li className="footer-link-item">
              <Link
                to="/github"
                className="footer-link"
              >
                Github
              </Link>
            </li>
            <li className="footer-link-item">
              <Link
                to="/contacts"
                className="footer-link"
              >
                Contacts
              </Link>
            </li>
            <li className="footer-link-item">
              <Link
                to="/rights"
                className="footer-link"
              >
                Rights
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-back-to-top">
          <label className="footer-back-to-top--label">Back to Top</label>
          <IconButton
            backgroundImage="../../../public/img/icons/Arrow-Top.png"
            onClick={handleBackToTop}
          />
        </div>
      </div>
    </footer>
  );
};
