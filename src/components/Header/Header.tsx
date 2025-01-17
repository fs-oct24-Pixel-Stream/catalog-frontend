import './Header.scss';
import logo from '../../../public/img/icons/Logo.svg';
import logoWhite from '../../../public/img/icons/LogoWhite.svg';
import { Link, useLocation } from 'react-router';
import burgerIc from '../../../public/img/icons/burger.svg';
import burgerClose from '../../../public/img/icons/burgerClose.svg';
import cart from '../../../public/img/icons/cart.png';
import fav from '../../../public/img/icons/fav.png';
import cartWhite from '../../../public/img/icons/cartWhite.png';
import favWhite from '../../../public/img/icons/favWhite.png';
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

export const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const isDesktop = useMediaQuery({ query: '(min-width: 1199px)' });

  const isMenuOpen = useAppSelector((state) => state.burger.burgerStatus);

  const toggleBurgerMenu = (): void => {
    dispatch(setBurgerState());
    console.log('here');
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
    if (isMenuOpen) {
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
          >
            {theme === 'light' ?
              <img
                src={logo}
                alt="logo"
              />
            : <img
                src={logoWhite}
                alt="logo"
              />
            }
          </Link>
          <HeaderLinks
            mainClassName="nav-links--item"
            activeClassName="nav-links--item nav-links--current"
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
                  src={burgerClose}
                  alt="icon for close side-bar"
                />
              </button>
            : <button>
                <img
                  src={burgerIc}
                  alt="icon for open side-bar"
                />
              </button>
            }
          </div>
        </div>
      </header>

      {isMenuOpen && <BurgerMenu />}
    </>
  );
};
