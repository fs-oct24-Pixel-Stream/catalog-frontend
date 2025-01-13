import { FC } from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import './BurgerMenu.scss';
import cn from 'classnames';
import fav from '../../../public/img/icons/fav.png';
import cart from '../../../public/img/icons/cart.png';
import { Link, useLocation } from 'react-router';
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu: FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  const location = useLocation();

  return (
    <div className={cn('burger-menu-content', { open: isOpen })}>
      <HeaderLinks
        mainClassName="burger-nav__main"
        activeClassName="burger-nav__main burger-nav__active"
        containerClassName="burger-nav"
        onClose={onClose}
      />

      <div className="burger-icons">
        <Link
          to="/favorites"
          className={cn('burger-icons__item', {
            'burger-icons__active': location.pathname === '/favorites',
          })}
          onClick={onClose}
        >
          <img
            src={fav}
            alt="favorite"
          />
        </Link>

        <Link
          to="/cart"
          className={cn('burger-icons__item', {
            'burger-icons__active': location.pathname === '/cart',
          })}
          onClick={onClose}
        >
          <img
            src={cart}
            alt="cart"
          />
        </Link>
      </div>
    </div>
  );
};
