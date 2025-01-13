import './Header.scss';
import logo from '../../../public/img/icons/Logo.svg';
import { Link, useLocation } from 'react-router';
import burger from '../../../public/img/icons/burger.svg';
import burgerClose from '../../../public/img/icons/burgerClose.svg';
import cart from '../../../public/img/icons/cart.png';
import fav from '../../../public/img/icons/fav.png';
import { HeaderLinks } from './HeaderLinks';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBurgerMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  // const isFavoriteStorage = localStorage.getItem('favorites');
  // const favoriteStorage = 2;

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
              className='logo-img'
            />
          </Link>

          <HeaderLinks
            mainClassName="nav-links--item"
            activeClassName="nav-links--item nav-links--current"
            containerClassName="nav-links"
            onClose={() => setIsMenuOpen(false)}
          />
        </div>

        <div
          className="burger-menu"
          onClick={toggleBurgerMenu}
          aria-label="Open menu"
        >
          {isMenuOpen ?
            <button>
              <img
                src={burgerClose}
                alt="icon for close side-bar"
              />
            </button>
          : <button>
              <img
                src={burger}
                alt="icon for open side-bar"
              />
            </button>
          }
        </div>

        <div className="icons-wrapper">
          <Link
            to="/favorites"
            className={cn('icons-wrapper__item', {
              'icons-wrapper__current': location.pathname === '/favorites',
            })}
          >
            <div>
              <img
                src={fav}
                alt="icon for favorite"
              />
              {/* {favoriteStorage > 0 && <span>{favoriteStorage}</span>} */}
            </div>
          </Link>
          <Link
            to="/cart"
            className={cn('icons-wrapper__item', {
              'icons-wrapper__current': location.pathname === '/cart',
            })}
          >
            <img
              src={cart}
              alt="icon for cart"
            />
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <BurgerMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};
