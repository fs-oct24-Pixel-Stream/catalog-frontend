import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import './CategorySection.scss';
import { Link } from 'react-router';

export const CategorySection = () => {
  const { products } = useAppSelector((state) => state.products);

  const filterProductsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  const phones = useMemo(() => filterProductsByCategory('phones'), [products]);
  const tablets = useMemo(() => filterProductsByCategory('tablets'), [products]);
  const accessories = useMemo(() => filterProductsByCategory('accessories'), [products]);

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
            <Link
              to={category.path}
              className="category-section__wrapper"
            >
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
