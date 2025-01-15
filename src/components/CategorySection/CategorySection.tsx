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

  const categories = [
    { id: 1, name: 'Mobile phones', path: '/phones', img: 'img/phones.png', items: phones },
    { id: 2, name: 'Tablets', path: '/tablets', img: 'img/tablets.png', items: tablets },
    {
      id: 3,
      name: 'Accessories',
      path: '/accessories',
      img: 'img/accessories.png',
      items: accessories,
    },
  ];

  return (
    <section>
      <h2 className="titleSecond category-title">Shop by category</h2>

      <div className="is-flex is-align-items-center is-justify-content-center category-section">
        {categories.map((category) => (
          <div
            className="category-section__item"
            key={category.id}
          >
            <Link to={category.path}>
              <img
                src={category.img}
                alt={`${category.name} image`}
                className="category-section__image"
              />
            </Link>

            <h3 className="category-section__title">{category.name}</h3>

            <div className="category-section__quantity">{category.items.length} models</div>
          </div>
        ))}
      </div>
    </section>
  );
};
