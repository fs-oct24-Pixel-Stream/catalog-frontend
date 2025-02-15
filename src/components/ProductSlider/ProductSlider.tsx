import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../app/hooks';
import { ProductCardType } from '../../utils/types/ProductCardType';

import { IconButton } from '../IconButton/IconButton';
import { ProductCard } from '../ProductCard';

import { ProductCardSkeleton } from '../Skeletons/ProductCardSkeleton/ProductCardSkeleton';

import cn from 'classnames';
import 'swiper/swiper-bundle.css';
import './ProductSlider.scss';

type Props = {
  products: ProductCardType[];
  title: string;
  discount?: boolean;
};

export const ProductSlider: React.FC<Props> = (props) => {
  const { products, discount = true, title } = props;
  const swiperRef = useRef<SwiperRef | null>(null);

  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';
  const isLoading = useAppSelector((state) => state.products.loading);
  const { t } = useTranslation();
  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="product-slider">
      <div className="is-flex is-justify-content-space-between is-align-items-center product-slider__header">
        <h2
          ref={ref}
          className={cn('titleSecond product-slider__title', { visible: inView })}
        >
          {t(title)}
        </h2>

        <div className="is-flex product-slider__buttons">
          <IconButton
            backgroundImage={
              isThemeDark ? 'img/icons/arrow-left-white.svg' : 'img/icons/arrow-left.svg'
            }
            onClick={handlePrevSlide}
            className="product-slider__button"
          />
          <IconButton
            backgroundImage={
              isThemeDark ? 'img/icons/arrow-right-white.svg' : 'img/icons/arrow-right.svg'
            }
            onClick={handleNextSlide}
            className="product-slider__button"
          />
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={16}
        slidesPerView={'auto'}
        loop={true}
        grabCursor={true}
        freeMode={true}
      >
        {isLoading ?
          Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="product-slider__item"
            >
              <ProductCardSkeleton />
            </SwiperSlide>
          ))
        : products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="product-slider__item"
            >
              <ProductCard
                discount={discount}
                product={product}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};
