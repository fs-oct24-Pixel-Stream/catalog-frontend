import cn from 'classnames';
import { FC } from 'react';
import { Link, useLocation } from 'react-router';

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

type Props = {
  mainClassName: string;
  activeClassName: string;
  containerClassName: string;
  onLinkClose?: () => void;
};

export const HeaderLinks: FC<Props> = (props) => {
  const { mainClassName, activeClassName, containerClassName, onLinkClose } = props;

  const location = useLocation();

  return (
    <div className={containerClassName}>
      {navLinks.map(({ name, pathName }) => {
        const isActive = pathName === location.pathname;

        return (
          <Link
            key={name}
            to={pathName}
            className={cn({
              [activeClassName]: isActive,
              [mainClassName]: !isActive,
            })}
            onClick={onLinkClose}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
