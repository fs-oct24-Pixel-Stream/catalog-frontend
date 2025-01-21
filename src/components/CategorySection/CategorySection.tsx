import { useMemo } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import { useAppSelector } from '../../app/hooks';
import cn from 'classnames';
import './CategorySection.scss';

export const CategorySection = () => {
  const { products } = useAppSelector((state) => state.products);
  const { t } = useTranslation();

  const filterProductsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  const phones = useMemo(() => filterProductsByCategory('phones'), [products]);
  const tablets = useMemo(() => filterProductsByCategory('tablets'), [products]);
  const accessories = useMemo(() => filterProductsByCategory('accessories'), [products]);

  const categories = [
    { id: 1, name: 'mobile', path: '/phones', img: 'img/phones.png', items: phones },
    { id: 2, name: 'Tablets', path: '/tablets', img: 'img/tablets.png', items: tablets },
    {
      id: 3,
      name: 'Accessories',
      path: '/accessories',
      img: 'img/accessories.png',
      items: accessories,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, //
  });

  return (
    <section>
      <h2
        ref={ref}
        className={cn('titleSecond category-title', { visible: inView })}
      >
        {t('shopByCategory')}
      </h2>

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

            <h3 className="category-section__title">{t(category.name)}</h3>

            <div className="category-section__quantity">
              {category.items.length} {t('models')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
