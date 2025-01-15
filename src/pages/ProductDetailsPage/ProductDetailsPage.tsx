import './ProductDetailsPage.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { useLocation, useNavigate } from 'react-router';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';
import { useEffect, useState } from 'react';
import { useCategoryProducts } from '../../utils/customHooks/useCategoryProducts';
import { ProductParamrsSelects } from '../../components/ProductParamrsSelects/ProductParamsSelects';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ColorKey } from '../../utils/types/colors';

export const ProductDetailsPage = () => {
  const [device, setDevice] = useState<ProductDeviceType | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname.split('/')[1];
  const deviceId = location.pathname.split('/')[2];
  const baseId = deviceId
    .split('-')
    .slice(0, deviceId.split('-').length - 2)
    .join('-');

  const products = useCategoryProducts(category);

  useEffect(() => {
    const selectedDevice = products.find((product: ProductDeviceType) => product.id === deviceId);
    setDevice(selectedDevice || null);
  }, [category, deviceId]);

  if (!device) {
    return <p>Loading...</p>;
  }

  const { name, images, colorsAvailable, capacityAvailable, description, id, color, capacity } =
    device;

  const handleColorChange = (newColor: ColorKey) => {
    const newPath = `/${category}/${baseId}-${capacity}-${newColor}`;
    navigate(newPath);
  };

  const handleCapasityChange = (newCapasity: string) => {
    const newPath = `/${category}/${baseId}-${newCapasity}-${color}`;
    navigate(newPath);
  };

  return (
    <div className="_container product-details">
      <div className="product-details__breadcrumps">
        <Breadcrumbs />
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
          color={color}
          capacity={capacity}
          onColorChange={handleColorChange}
          onCapasityChange={handleCapasityChange}
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
