import { FC } from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import './BurgerMenu.scss';
import classNames from 'classnames';
import fav from '../../../public/img/icons/fav.png';
import cart from '../../../public/img/icons/cart.png';
import { Link } from 'react-router';
type Props = {
  isOpen: boolean;
};

export const BurgerMenu: FC<Props> = (props) => {
  const { isOpen } = props;

  return (
    <div className={classNames('burger-menu-content', { open: isOpen })}>
      <HeaderLinks
        mainClassName="burger-nav__main"
        activeClassName="burger-nav__main burger-nav__active"
        containerClassName="burger-nav"
      />

      <div className="burger-icons">
        <Link to='/favorites' 
        className="burger-icons__item">
          <img
            src={fav}
            alt="favorite"
          />
        </Link>

        <Link
          to="/cart"
          className="burger-icons__item"
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
