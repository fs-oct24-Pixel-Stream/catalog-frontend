import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useAppSelector } from '../../../app/hooks';

import 'react-loading-skeleton/dist/skeleton.css';

export const ProductCardSkeleton = () => {
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <div className="is-flex is-flex-direction-column is-justify-content-space-between product-card">
        <div className="product-card__image">
          <Skeleton height={190} />
        </div>

        <div className="product-card__title">
          <Skeleton
            width="80%"
            height={40}
          />
        </div>

        <div className="is-flex product-card__price">
          <Skeleton
            width={50}
            height={30}
          />
        </div>

        <div className="product-card__line"></div>

        <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
          <Skeleton
            width={50}
            height={14}
          />
          <Skeleton
            width={30}
            height={14}
          />
        </div>

        <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
          <Skeleton
            width={50}
            height={14}
          />
          <Skeleton
            width={30}
            height={14}
          />
        </div>

        <div className="is-flex is-align-items-center is-justify-content-space-between product-card__descriptions">
          <Skeleton
            width={50}
            height={14}
          />
          <Skeleton
            width={30}
            height={14}
          />
        </div>

        <div className="is-flex is-justify-content-space-between product-card__buttons">
          <Skeleton
            width={175}
            height={40}
          />
          <Skeleton
            width={40}
            height={40}
          />
        </div>
      </div>
    </SkeletonTheme>
  );
};
