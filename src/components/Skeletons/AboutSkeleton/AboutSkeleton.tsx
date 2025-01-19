import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppSelector } from '../../../app/hooks';

export const AboutSkeleton = () => {
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  return (
    <SkeletonTheme
      baseColor={isThemeDark ? '#333' : '#e0e0e0'}
      highlightColor={isThemeDark ? '#444' : '#f5f5f5'}
    >
      <div className="about about--skeleton">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <section
              key={index}
              className="about__section"
            >
              <Skeleton
                className="about__section--title"
                height={32}
                width="50%"
              />
              <Skeleton
                className="about__section--text"
                height={20}
                width="90%"
                count={3}
              />
            </section>
          ))}
      </div>
    </SkeletonTheme>
  );
};
