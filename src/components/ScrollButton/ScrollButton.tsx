import { useEffect, useState } from 'react';
import cn from 'classnames';

import { handleBackToTop } from '../../utils/functions/handleBackToTop';

import { IconButton } from '../IconButton';

import './ScrollButton.scss';

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

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
    isVisible: isVisible && !isScrolling,
    hidden: !isVisible || isScrolling,
  });

  return (
    <div className={buttonClass}>
      <IconButton
        className="scroll-button__footer buttonClass"
        backgroundImage="img/icons/Arrow-top-white.svg"
        onClick={handleBackToTop}
      />
    </div>
  );
};
