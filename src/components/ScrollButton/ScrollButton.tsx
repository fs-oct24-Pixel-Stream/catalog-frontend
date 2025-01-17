import { useEffect, useState } from 'react';
import { IconButton } from '../IconButton';
import { handleBackToTop } from '../../utils/functions/handleBackToTop';
import cn from 'classnames';
import './ScrollButton.scss';
import { useAppSelector } from '../../app/hooks';

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';

  useEffect(() => {
    let timeout: any;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setIsScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
        if (scrollTop > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const buttonClass = cn('scroll-button', {
    visible: isVisible && !isScrolling,
    hidden: !isVisible || isScrolling,
  });

  return (
    <div className={buttonClass}>
      <IconButton
        className="scroll-button__footer buttonClass"
        backgroundImage={isThemeDark ? 'img/icons/Arrow-top-white.svg' : 'img/icons/Arrow-top.svg'}
        onClick={handleBackToTop}
      />
    </div>
  );
};
