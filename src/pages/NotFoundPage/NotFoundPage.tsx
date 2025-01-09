import { Link } from 'react-router';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="_container">
      <nav className="navigation">
        <span className="fa-solid fa-angle-left"></span>
        <Link
          to=".."
          className="go-back-btn"
        >
          back
        </Link>
      </nav>
      <h1 className="title">Page Not Found</h1>
    </div>
  );
};
