import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppSelector } from '../../../app/hooks';

export const CategorySectionSkeleton = () => {
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <section>
        <h2 className="titleSecond category-title">
          <Skeleton
            width={200}
            height={32}
          />
        </h2>

        <div className="is-flex is-align-items-center is-justify-content-center category-section">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="category-section__item"
              key={index}
            >
              <div className="category-section__wrapper">
                <Skeleton height={288} />
              </div>

              <h3 className="category-section__title">
                <Skeleton
                  width={250}
                  height={24}
                />
              </h3>

              <div className="category-section__quantity">
                <Skeleton
                  width={100}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </SkeletonTheme>
  );
};
