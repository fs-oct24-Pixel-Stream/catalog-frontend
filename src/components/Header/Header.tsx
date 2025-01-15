import './Header.scss';
import logo from '../../../public/img/icons/Logo.svg';
import { Link, NavLink, useLocation } from 'react-router';
import burger from '../../../public/img/icons/burger.svg';
import burgerClose from '../../../public/img/icons/burgerClose.svg';
import cart from '../../../public/img/icons/cart.png';
import fav from '../../../public/img/icons/fav.png';
import search from '../../../public/img/icons/Search.svg';
import { HeaderLinks } from './HeaderLinks';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../app/hooks';
import { SearchModal } from '../SearchModal';

export const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleBurgerMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleSearchModal = (): void => {
    setIsSearchActive((prev) => !prev);
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

  const cartList = useAppSelector((state) => state.cart.cart);
  const favoritesList = useAppSelector((state) => state.favorities.products);

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
              className="logo-img"
            />
          </Link>
          <HeaderLinks
            mainClassName="nav-links--item"
            activeClassName="nav-links--item nav-links--current"
            containerClassName="nav-links"
            onClose={() => setIsMenuOpen(false)}
          />
        </div>

        <div className="header-icons-box">
          <div className="icons">
            <div
              className="icons-search icon-container"
              onClick={toggleSearchModal}
              aria-label="open search"
            >
              <img
                src={search}
                alt="search"
              />
            </div>
            {isSearchActive && <SearchModal onClose={toggleSearchModal} />}
            <div className="icons-togle-switcher">
              <div className="icons-toggle icon-container">
                <p>toggle</p>
              </div>

              <div className="icons-language icon-container">
                <select
                  className="nav-links--item language-selector"
                  defaultValue="EN"
                >
                  <option value="EN">EN</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </div>
            <div className="icons-wrapper">
              <Link
                to="/favorites"
                className={cn('icons-wrapper__item icon-container', {
                  'icons-wrapper__current': location.pathname === '/favorites',
                })}
              >
                <div className="icons-img-box">
                  <img
                    src={fav}
                    alt="icon for favorite"
                  />
                  {favoritesList.length > 0 && (
                    <span className="item-counter">{favoritesList.length}</span>
                  )}
                </div>
              </Link>
              <Link
                to="/cart"
                className={cn('icons-wrapper__item icon-container', {
                  'icons-wrapper__current': location.pathname === '/cart',
                })}
              >
                <div className="icons-img-box">
                  <img
                    src={cart}
                    alt="icon for cart"
                  />
                  {cartList.length > 0 && <span className="item-counter">{cartList.length}</span>}
                </div>
              </Link>
            </div>
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
