import { FC } from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import './BurgerMenu.scss';
import cn from 'classnames';
import { Link } from 'react-router';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <div className={cn('burger-menu-content', { open: isOpen })}>
      <div>
        <HeaderLinks
          mainClassName="burger-nav__main"
          activeClassName="burger-nav__main burger-nav__active"
          containerClassName="burger-nav"
          onClose={onClose}
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
