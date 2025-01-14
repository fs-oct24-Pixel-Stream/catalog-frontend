import { Link, useLocation } from 'react-router';
import cn from 'classnames';
import './Breadcrumbs.scss';

export const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((page) => page !== '');
  console.log(pathnames);
  const isActivePathActive = (pathIndex: number) => {
    if (pathIndex === 0 && pathnames.length > 1) {
      return true;
    }
    return false;
  };
  return (
    <div className="breadcrumbs-container">
      <ul className="breadcrumbs">
        <li>
          <Link to="/">
            <img
              className="breadcrumbs__home"
              src="./img/icons/Home.svg"
              alt="Home"
            />
          </Link>
        </li>
        {pathnames.map((path, index) => {
          const redirectTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li
              key={path}
              className="breadcrumbs__link"
            >
              <span>&gt;</span>
              <Link
                to={redirectTo}
                className={cn({
                  'breadcrumbs__link--active': isActivePathActive(index),
                  'breadcrumbs__link': !isActivePathActive(index),
                })}
              >
                {path}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
