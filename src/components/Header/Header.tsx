import './Header.scss';
import logo from '../../../public/img/icons/Logo.svg';
import logoWhite from '../../../public/img/icons/LogoWhite.svg';
import burger from '../../../public/img/icons/burger.svg';
import burgerWhite from '../../../public/img/icons/burgerWhite.svg';
import burgerClose from '../../../public/img/icons/burgerClose.svg';
import burgerCloseWhite from '../../../public/img/icons/burgerCloseWhite.svg';
import cart from '../../../public/img/icons/Cart.svg';
import fav from '../../../public/img/icons/Fav.svg';
import cartWhite from '../../../public/img/icons/Cart-White.svg';
import favWhite from '../../../public/img/icons/Fav-White-Empty.svg';
import search from '../../../public/img/icons/Search.svg';
import searchWhite from '../../../public/img/icons/SearchWhite.svg';
import { HeaderLinks } from './HeaderLinks';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SearchModal } from '../SearchModal';
import { useMediaQuery } from 'react-responsive';
import { DesctopSearch } from '../DesctopSearch/DesctopSearch';
import { setTheme } from '../../features/theme/themeSlice';
import '@theme-toggles/react/css/Within.css';
import { Within } from '@theme-toggles/react';
import { setBurgerState } from '../../features/burger/burgerSlice';
import { Link } from 'react-router';

import { LangToggle } from '../LangToggle/LangToggle';

import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const [isSearchActive, setIsSearchActive] = useState(false);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery({ query: '(min-width: 1199px)' });

  const isMenuOpen = useAppSelector((state) => state.burger.burgerStatus);

  const location = useLocation();
  const toggleBurgerMenu = (): void => {
    dispatch(setBurgerState());
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      dispatch(setBurgerState());
    }
  };

  const toggleSearchModal = (): void => {
    setIsSearchActive((prev) => !prev);
  };

  const toggleThemeChange = (): void => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (isMenuOpen || isSearchActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen, isSearchActive]);

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
            onClick={handleLinkClick}
          >
            {theme === 'light' ?
              <img
                src={logo}
                alt="logo"
                className="logo-img"
              />
            : <img
                src={logoWhite}
                alt="logo"
                className="logo-img"
              />
            }
          </Link>
          <HeaderLinks
            mainClassName="nav-links--item"
            activeClassName="nav-links--item nav-links--current active"
            containerClassName="nav-links"
          />
        </div>

        <div className="header-icons-box">
          <div className="icons">
            {isSearchActive && isDesktop && <DesctopSearch onClose={toggleSearchModal} />}

            <div
              className="icons-search icon-container"
              onClick={toggleSearchModal}
              aria-label="open search"
            >
              {theme === 'light' ?
                <img
                  src={search}
                  alt="icon for search"
                />
              : <img
                  src={searchWhite}
                  alt="white icon for search"
                />
              }
            </div>
            {isSearchActive && !isDesktop && <SearchModal onClose={toggleSearchModal} />}

            <div className="icons-togle-switcher">
              <div
                onClick={toggleThemeChange}
                className="icons-toggle icon-container"
              >
                {/* our toggler */}
                <Within
                  style={{ width: '16px' }}
                  duration={750}
                  toggled={theme === 'dark'}
                  className={cn({ 'toggler-white': theme === 'dark' })}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              </div>

              <div className="icons-language icon-container">
                <LangToggle />
              </div>
            </div>
            <div className="icons-wrapper">
              <Link
                to="/favorites"
                className={cn('icons-wrapper__item icon-container', {
                  'icons-wrapper__current': location.pathname === '/favorites',
                })}
                onClick={handleLinkClick}
              >
                <div className="icons-img-box">
                  {theme === 'light' ?
                    <img
                      src={fav}
                      alt="icon for favorite"
                    />
                  : <img
                      src={favWhite}
                      alt="icon for favorite"
                    />
                  }
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
                onClick={handleLinkClick}
              >
                <div className="icons-img-box">
                  {theme === 'light' ?
                    <img
                      src={cart}
                      alt="icon for cart"
                    />
                  : <img
                      src={cartWhite}
                      alt="icon for cart"
                    />
                  }
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
                  src={theme === 'light' ? burgerClose : burgerCloseWhite}
                  alt="icon for close side-bar"
                />
              </button>
            : <img
                src={theme === 'light' ? burger : burgerWhite}
                alt="icon for open side-bar"
              />
            }
          </div>
        </div>
      </header>

      {isMenuOpen && <BurgerMenu />}
    </>
  );
};
