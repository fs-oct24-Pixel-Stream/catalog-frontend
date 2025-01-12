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
};

export const HeaderLinks: FC<Props> = (props) => {
  const { mainClassName, activeClassName, containerClassName } = props;

  const location = useLocation();

  return (
    <div className={containerClassName}>
      {navLinks.map(({ name, pathName }) => {
        return (
          <Link
            key={name}
            to={pathName}
            className={pathName === location.pathname ? activeClassName : mainClassName}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
