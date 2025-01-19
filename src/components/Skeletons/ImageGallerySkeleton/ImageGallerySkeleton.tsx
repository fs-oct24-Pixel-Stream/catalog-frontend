import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useAppSelector } from '../../../app/hooks';
import './ImageGallerySkeleton.scss';

export const ImageGallerySkeleton = () => {
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <div className="image-gallery image-gallery--skeleton">
        <div className="image-gallery__main-skeleton">
          <Skeleton
            height={400}
            width="100%"
          />
        </div>

        <div className="image-gallery__thumbnails">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="image-gallery__thumbnail-skeleton"
              >
                <Skeleton
                  height={60}
                  width={60}
                />
              </div>
            ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};
