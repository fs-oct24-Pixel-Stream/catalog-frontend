import { FC, useEffect } from 'react';
import { Within } from '@theme-toggles/react';

import cn from 'classnames';

import { setTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setBurgerState } from '../../features/burger/burgerSlice';

import { HeaderLinks } from '../Header/HeaderLinks';

import './BurgerMenu.scss';
import { LangToggle } from '../LangToggle';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../features/languages/languagesSlice';

export const BurgerMenu: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const currLanguage = useAppSelector((state) => state.language.lang);
  const { i18n } = useTranslation();

  const handleChange = () => {
    if (currLanguage === 'en') {
      dispatch(setLanguage('ua'));
      i18n.changeLanguage('ua');
    } else {
      dispatch(setLanguage('en'));
      i18n.changeLanguage('en');
    }
  };
  const toggleThemeChange = (): void => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };
  const handleCloseMenu = () => {
    dispatch(setBurgerState());
  };
  const isOpen = useAppSelector((state) => state.burger.burgerStatus);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={cn('burger-menu-content', { open: true })}>
      <div>
        <div className="burger-icons">
          <div
            className="burger-icons__item"
            onClick={toggleThemeChange}
          >
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

          <div
            className="burger-icons__item"
            onClick={handleChange}
          >
            <LangToggle />
          </div>
        </div>
        <HeaderLinks
          mainClassName="burger-nav__main"
          activeClassName="burger-nav__main burger-nav__active"
          containerClassName="burger-nav"
          onLinkClose={handleCloseMenu}
        />
      </div>
    </div>
  );
};
