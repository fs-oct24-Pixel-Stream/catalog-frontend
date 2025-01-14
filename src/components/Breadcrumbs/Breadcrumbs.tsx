import { Link } from 'react-router';
import './Breadcrumbs.scss';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';

type Props = {
  product?: ProductDeviceType;
};

export const Breadcrumbs = () => {
  return (
    <>
      <div className="_container">
        <ul className="breadcrumbs">
          <li>
            <Link to="/">
              <img
                className="breadcrumbs__home"
                src="./img/icons/Home.svg"
              />
            </Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link
              to="/phones"
              className="breadcrumbs__link"
            >
              Phones
            </Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link
              to="/"
              className="breadcrumbs__link"
            >
              Apple iPhone XS 64GB Gold
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
