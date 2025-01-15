import { ProductCardType } from '../../utils/types/ProductCardType';
import { IconButton } from '../IconButton/IconButton';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { ProductCard } from '../ProductCard';
import 'swiper/swiper-bundle.css';
import './ProductSlider.scss';

interface Props {
  products: ProductCardType[];
  title: string;
  discount?: boolean;
}

export const ProductSlider: React.FC<Props> = (props) => {
  const { products, title, discount = true } = props;
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  return (
    <div className="product-slider">
      <div className="is-flex is-justify-content-space-between is-align-items-center product-slider__header">
        <h2 className="titleSecond product-slider__title">{title}</h2>
        <div className="is-flex product-slider__buttons">
          <IconButton
            backgroundImage="img/icons/arrow-left.svg"
            onClick={handlePrevSlide}
          />
          <IconButton
            backgroundImage="img/icons/arrow-right.svg"
            onClick={handleNextSlide}
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
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="product-slider__item"
          >
            <ProductCard
              discount={discount}
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
