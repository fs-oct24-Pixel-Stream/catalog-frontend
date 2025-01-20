import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useAppSelector } from '../../../app/hooks';

export const PriceSkeleton = () => {
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <div className="is-flex is-justify-content-space-between actions-buttons">
        <Skeleton
          width={75}
          height={40}
          className="actions-buttons__buy-skeleton"
        />
      </div>
    </SkeletonTheme>
  );
};
