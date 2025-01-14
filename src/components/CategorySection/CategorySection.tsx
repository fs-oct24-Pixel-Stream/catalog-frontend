import { ProductCardType } from '../../utils/types/ProductCardType';
import './CategorySection.scss';
import { Link } from 'react-router';

interface Props {
  phones: ProductCardType[];
  tablets: ProductCardType[];
  accessories: ProductCardType[];
}

export const CategorySection: React.FC<Props> = (props) => {
  const { phones, tablets, accessories } = props;

  return (
    <section>
      <h2 className="titleSecond category-title">Shop by category</h2>

      <div className="is-flex is-align-items-center is-justify-content-center category-item">
        <div>
          <Link to="/phones">
            <img
              src="img/phones.png"
              alt="Phone image"
              className="category-item__image"
            />
          </Link>

          <h3 className="category-item__title">Mobile phones</h3>

          <div className="category-item__quantity">{phones.length} models</div>
        </div>

        <div>
          <Link to="/tablets">
            <img
              src="img/tablets.png"
              alt="Phone image"
              className="category-item__image"
            />
          </Link>

          <h3 className="category-item__title">Tablets</h3>

          <div className="category-item__quantity">{tablets.length} models</div>
        </div>

        <div>
          <Link to="/accessories">
            <img
              src="img/accessories.png"
              alt="Phone image"
              className="category-item__image"
            />
          </Link>

          <h3 className="category-item__title">Accessories</h3>

          <div className="category-item__quantity">{accessories.length} models</div>
        </div>
      </div>
    </section>
  );
};
