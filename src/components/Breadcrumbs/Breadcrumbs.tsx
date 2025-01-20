import { Link, useLocation } from 'react-router';
import cn from 'classnames';
import './Breadcrumbs.scss';
import { useAppSelector } from '../../app/hooks';
import { useTranslation } from 'react-i18next';

export const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const pathnames = location.pathname.split('/').filter((page) => page !== '');
  const isActivePathActive = (pathIndex: number) => {
    if (pathIndex === 0 && pathnames.length > 1) {
      return true;
    }
    return false;
  };

  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className="breadcrumbs-container">
      <ul className="breadcrumbs">
        <li>
          <Link to="/">
            <img
              className="breadcrumbs__home"
              src={theme === 'light' ? './img/icons/Home.svg' : './img/icons/HomeWhite.svg'}
              alt="Home"
            />
          </Link>
        </li>
        {pathnames.map((path, index) => {
          const formattedPath = path.replace(/-/g, ' ');
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
                {t(formattedPath)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
