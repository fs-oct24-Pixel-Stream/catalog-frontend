import './Header.scss';
import logo from '../../../public/img/Logo.png';
import { Link } from 'react-router';
import burger from '../../../public/img/icons/burger.png';
import cart from '../../../public/img/icons/cart.png';
import fav from '../../../public/img/icons/fav.png';
import { HeaderLinks } from './HeaderLinks';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBurgerMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className="header"
        id="home"
      >
        <div className="header-nav">
          <Link
            to="/"
            className="header-nav--logo"
          >
            <img
              src={logo}
              alt="logo"
            />
          </Link>

          <HeaderLinks
            mainClassName="nav-links--item"
            activeClassName="nav-links--item nav-links--current"
            containerClassName="nav-links"
          />
        </div>

        <div
          className="burger-menu"
          onClick={toggleBurgerMenu}
          aria-label="Open menu"
        >
          <button>
            <img
              src={burger}
              alt="icon for open side-bar"
            />
          </button>
        </div>

        <div className="icons-wrapper">
          <div className="icons-wrapper--item">
            <Link to="/favorites">
              <img
                src={fav}
                alt="icon for favorite"
              />
            </Link>
          </div>
          <div className="icons-wrapper--item">
            <Link to="/cart">
              <img
                src={cart}
                alt="icon for cart"
              />
            </Link>
          </div>
        </div>
      </header>
      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};
