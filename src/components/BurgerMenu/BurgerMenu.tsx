import { FC } from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import './BurgerMenu.scss';
import cn from 'classnames';
import { Link } from 'react-router';
import { Within } from '@theme-toggles/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTheme } from '../../features/theme/themeSlice';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu: FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const toggleThemeChange = (): void => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };
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

        <div className="burger-icons__item">
          <div>UA</div>
        </div>
      </div>
    </div>
  );
};
