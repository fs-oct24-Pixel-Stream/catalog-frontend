import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useAppSelector } from '../../../app/hooks';

export const TechSpecsSkeleton = ({ variant = 'full' }) => {
  const specsCount = variant === 'short' ? 4 : 8;
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <div className={`tech-specs ${variant === 'short' ? 'tech-specs--short' : ''}`}>
        <ul className="tech-specs__list">
          {Array.from({ length: specsCount }).map((_, index) => (
            <li
              className="tech-specs__item"
              key={index}
            >
              <div className="tech-specs__item--name">
                <Skeleton
                  width={100}
                  height={16}
                />
              </div>
              <div className="tech-specs__item--value">
                <Skeleton
                  width={80}
                  height={16}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SkeletonTheme>
  );
};
