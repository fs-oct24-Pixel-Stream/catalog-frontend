import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import { IconButton } from '../IconButton/IconButton';
import { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';

import './PromoSection.scss';
import 'swiper/swiper-bundle.css';

export const PromoSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  return (
    <div>
      <div className="is-flex promo-section">
        <IconButton
          backgroundImage="/public/img/icons/arrow-left.svg"
          onClick={handlePrevSlide}
          className="promo-section__button"
        />
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ el: paginationRef.current, clickable: true }}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          className="promo-section__swiper"
        >
          <SwiperSlide>
            <Link to={'/apple-iphone-14-512gb-midnight'}>
              <div className="promo-section__slide promo-section__slide--first"></div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={'/phones'}>
              <div className="promo-section__slide promo-section__slide--second"></div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={'/tablets'}>
              <div className="promo-section__slide promo-section__slide--third"></div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={'/accessories'}>
              <div className="promo-section__slide promo-section__slide--fourth"></div>
            </Link>
          </SwiperSlide>
        </Swiper>
        <IconButton
          backgroundImage="/public/img/icons/arrow-right.svg"
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
