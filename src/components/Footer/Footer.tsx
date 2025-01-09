import './Footer.scss'
export const Footer = () => {

  return (
    <footer className="footer">
      <div className="container content has-text-centered">
        <div className="footer-logo">
          <img
            src="../../../public/img/Logo.png"
            alt="Nice Gadgets Logo"
            className="logo"
          />
        </div>

        <div>
          <ul className="footer-links">
            <li>
              <a
                href="/github"
                className="footer-link"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className="footer-link"
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                href="/rights"
                className="footer-link"
              >
                Rights
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-back-to-top">
          <button className="back-to-top-button">Back to Top</button>
        </div>
      </div>
    </footer>
  );
}