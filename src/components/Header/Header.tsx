// import { useState } from 'react';
import './Header.scss';
import logo from '../../../public/img/Logo.png';
import { useLocation } from 'react-router';
import { Link } from 'react-router';
import burger from '../../../public/img/icons/burger.png';
import cart from '../../../public/img/icons/cart.png';
import fav from '../../../public/img/icons/fav.png';
// import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

const navLinks = [
  {
    name: 'home',
    pathName: '/',
  },
  {
    name: 'phones',
    pathName: '/phones',
  },
  {
    name: 'tablets',
    pathName: '/tablets',
  },
  {
    name: 'accessories',
    pathName: '/accessories',
  },
];

export const Header = () => {
  const location = useLocation();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleBurgerMenu = (): void => {
  //   setIsMenuOpen((prev) => !prev);
  // };

  return (
    <>
      <header
        className="header"
        id="home"
      >
        <div className="header-nav">
          <a
            href="#"
            className="header-nav--logo"
          >
            <img
              src={logo}
              alt="logo"
            />
          </a>

          <div className="nav-links">
            {navLinks.map(({ name, pathName }) => {
              return (
                <Link
                  key={name}
                  to={pathName}
                  className={
                    pathName === location.pathname ?
                      'nav-links--item nav-links--current'
                    : 'nav-links--item'
                  }
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className="burger-menu"
          // onClick={toggleBurgerMenu}
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
      {/* <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      /> */}
    </>
  );
};
