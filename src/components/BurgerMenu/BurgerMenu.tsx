import { FC } from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import './BurgerMenu.scss';
import cn from 'classnames';
import { Link } from 'react-router';
import { useAppDispatch } from '../../app/hooks';
import { setBurgerState } from '../../features/burger/burgerSlice';

export const BurgerMenu: FC = () => {
  const dispatch = useAppDispatch();

  const handleCloseMenu = () => {
    dispatch(setBurgerState());
  };

  return (
    <div className={cn('burger-menu-content', { open: true })}>
      <div>
        <HeaderLinks
          mainClassName="burger-nav__main"
          activeClassName="burger-nav__main burger-nav__active"
          containerClassName="burger-nav"
          onLinkClose={handleCloseMenu}
        />
      </div>

      <div className="burger-icons">
        <Link
          to="#"
          className="burger-icons__item"
        >
          <div>toggle</div>
        </Link>

        <Link
          to="#"
          className="burger-icons__item"
        >
          <div>UK</div>
        </Link>
      </div>
    </div>
  );
};
