import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import { IconButton } from '../IconButton/IconButton';
import { useEffect, useRef } from 'react';
import { Pagination } from 'swiper/modules';

import './PromoSection.scss';
import 'swiper/swiper-bundle.css';
import { useAppSelector } from '../../app/hooks';
import { PromoSectionSkeleton } from '../Skeletons/PromoSectionSkeleton/PromoSectionSkeleton';

export const PromoSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const isThemeDark = useAppSelector((state) => state.theme.theme) === 'dark';
  const isLoading = useAppSelector((state) => state.products.loading);

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance && paginationRef.current) {
      if (typeof swiperInstance.params.pagination === 'object') {
        swiperInstance.params.pagination.el = paginationRef.current;
        swiperInstance.pagination.init();
        swiperInstance.pagination.render();
        swiperInstance.pagination.update();
      }
    }
  }, []);

  return (
    <div>
      <div className="is-flex promo-section">
        <IconButton
          backgroundImage={
            isThemeDark ? 'img/icons/arrow-left-white.svg' : 'img/icons/arrow-left.svg'
          }
          onClick={handlePrevSlide}
          className=" promo-section__button "
        />
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{ el: paginationRef.current, clickable: true }}
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          className="promo-section__swiper"
        >
          {isLoading &&
            Array.from({ length: 1 }).map((_, index) => (
              <SwiperSlide
                key={index}
                className="promo-section__slide"
              >
                <PromoSectionSkeleton />
              </SwiperSlide>
            ))}
          <SwiperSlide>
            <Link to={'/phones/apple-iphone-14-512gb-midnight'}>
              <video
                className="promo-section__slide"
                autoPlay
                loop
                playsInline
                preload="auto"
                muted
              >
                <source src="video/iPhone-14-Pro.mp4" />
              </video>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={'/tablets/apple-ipad-air-4th-gen-256gb-rosegold'}>
              <video
                className="promo-section__slide"
                autoPlay
                loop
                playsInline
                preload="auto"
                muted
              >
                <source src="video/iPad-Air-4.mp4" />
              </video>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={'/accessories/apple-watch-series-6-40mm-spacegray'}>
              <video
                className="promo-section__slide"
                autoPlay
                loop
                playsInline
                preload="auto"
                muted
              >
                <source src="video/Apple-Watch-Series-6.mp4" />
              </video>
            </Link>
          </SwiperSlide>
        </Swiper>
        <IconButton
          backgroundImage={
            isThemeDark ? 'img/icons/arrow-right-white.svg' : 'img/icons/arrow-right.svg'
          }
          onClick={handleNextSlide}
          className="promo-section__button"
        />
      </div>
      <div
        ref={paginationRef}
        className="pagination"
      ></div>
    </div>
  );
};
