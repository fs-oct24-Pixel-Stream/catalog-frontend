import './CategorySection.scss';
import { Link } from 'react-router';

export const CategorySection = () => {
  return (
    <section className="_container">
      <h2 className="titleSecond category-title">Shop by category</h2>

      <div className="is-flex is-align-items-center is-justify-content-center category-item">
        <div>
          <Link to="/phones">
            <img
              src="public\img\phones.png"
              alt="Phone image"
              className="category-item__image"
            />
          </Link>

          <h3 className="category-item__title">Mobile phones</h3>

          <div className="category-item__quantity">96 models</div>
        </div>

        <div>
          <Link to="/tablets">
            <img
              src="public\img\tablets.png"
              alt="Phone image"
              className="category-item__image"
            />
          </Link>

          <h3 className="category-item__title">Tablets</h3>

          <div className="category-item__quantity">96 models</div>
        </div>

        <div>
          <Link to="/accessories">
            <img
              src="public\img\accessories.png"
              alt="Phone image"
              className="category-item__image"
            />
          </Link>

          <h3 className="category-item__title">Accessories</h3>

          <div className="category-item__quantity">96 models</div>
        </div>
      </div>
    </section>
  );
};
