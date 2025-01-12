import { FC } from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import './BurgerMenu.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <div className={`burger-menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="burger-menu-content">
        <button
          className="burger-menu-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>
        <HeaderLinks
          mainClassName="link"
          activeClassName="link-active"
          containerClassName="burger-nav-cont"
        />
      </div>
    </div>
  );
};

// <div className={classNames('burger-menu-overlay', { open: isOpen })}>
//
