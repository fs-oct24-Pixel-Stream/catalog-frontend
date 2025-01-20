import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useAppSelector } from '../../../app/hooks';

import 'react-loading-skeleton/dist/skeleton.css';

export const PromoSectionSkeleton = () => {
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <div>
        <Skeleton height={400} />
      </div>
    </SkeletonTheme>
  );
};
