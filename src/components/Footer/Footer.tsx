import { Link } from 'react-router';
import './Footer.scss';
export const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="_container footer-content has-text-centered">
        <div className="footer-logo">
          <Link
            to="/home"
            className="footer-logo--link"
          >
            <img
              src="../../../public/img/Logo.png"
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
          <label
            htmlFor="back-to-top"
            className="footer-back-to-top--label"
          >
            Back to Top
          </label>
          <button
            className="footer-back-to-top--button"
            id="back-to-top"
            onClick={handleBackToTop}
          >
            <img
              src="./../../../public/img/icons/Arrow-Top.png"
              alt="top angle arrow"
              className="footer-back-to-top--img"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
