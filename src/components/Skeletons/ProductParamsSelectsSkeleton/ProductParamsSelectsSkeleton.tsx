import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useAppSelector } from '../../../app/hooks';

export const ProductParamsSelectsSkeleton = () => {
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <div className="available-options skeleton">
        <div className="available-options__section">
          <div className="available-options__label-wrapper">
            <Skeleton
              width={100}
              height={20}
              className="mb-4"
            />
          </div>
          <div className="is-flex skeleton__buttons">
            <Skeleton
              circle
              width={32}
              height={32}
              className="mr-4"
            />
            <Skeleton
              circle
              width={32}
              height={32}
              className="mr-4"
            />
            <Skeleton
              circle
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="available-options__section">
          <Skeleton
            width={100}
            height={20}
            className="mb-4"
          />
          <div className="is-flex skeleton__buttons">
            <Skeleton
              width={50}
              height={32}
              className="mr-4"
            />
            <Skeleton
              width={50}
              height={32}
              className="mr-4"
            />
            <Skeleton
              width={50}
              height={32}
            />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
