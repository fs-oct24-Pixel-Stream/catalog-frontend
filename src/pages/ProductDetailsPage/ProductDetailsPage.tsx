import './ProductDetailsPage.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { useLocation } from 'react-router';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';
import { useEffect, useState } from 'react';
import { useCategoryProducts } from '../../utils/customHooks/useCategoryProducts';
import { ProductParamrsSelects } from '../../components/ProductParamrsSelects/ProductParamsSelects';

export const ProductDetailsPage = () => {
  const [device, setDevice] = useState<ProductDeviceType | null>(null);

  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const deviceId = location.pathname.split('/')[2];

  const products = useCategoryProducts(category);

  useEffect(() => {
    const selectedDevice = products.find((product: ProductDeviceType) => product.id === deviceId);
    setDevice(selectedDevice || null);
  }, [category, deviceId]);

  if (!device) {
    return <p>Loading...</p>;
  }

  const { name, images, colorsAvailable, capacityAvailable, description, id } = device;

  return (
    <div className="_container product-details">
      <div className="product-details__breadcrumps">
        {/* TODO ADD Breadcrumps */}
        Breadcrumps
      </div>

      <div className="product-details__back-button">
        <BackButton />
      </div>

      <h1 className="product-details__title titleSecond">{name}</h1>

      <section className="product-details__gallery">
        <ProductGallery
          images={images}
          name={name}
        />
      </section>

      <section className="product-details__parameters">
        <ProductParamrsSelects
          colorsAvailable={colorsAvailable}
          capacityAvailable={capacityAvailable}
          id={id}
          category={category}
        />
      </section>

      <section className="product-details__about">
        <h3 className="product-details__subtitle">About</h3>
        <div className="product-details__line" />

        <AboutSection description={description} />
      </section>

      <section className="product-details__tech-specs">
        <h3 className="product-details__subtitle">Tech specs</h3>
        <div className="product-details__line" />

        <TechSpecs
          device={device}
          category={category}
        />
      </section>

      <section className="product-details__recommended">
        {/* TODO ADD Recommended */}
        Recommended
      </section>
    </div>
  );
};
