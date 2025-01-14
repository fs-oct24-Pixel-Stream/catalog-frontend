import './ProductDetailsPage.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { useAppSelector } from '../../app/hooks';
import { useLocation } from 'react-router';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';
import { useEffect, useState } from 'react';

/* import tablets from './../../../public/api/tablets.json';
const device = tablets[0]; */

export const ProductDetailsPage = () => {
  const [device, setDevice] = useState<ProductDeviceType | null>(null);

  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const deviceId = location.pathname.split('/')[2];

  const tablets = useAppSelector((state) => state.tablets.tablets);
  /* const getCategoryProducts = () => {
    switch (category) {
      case 'phones':
        return useAppSelector((state) => state.phones.phones);
      case 'tablets':
        return useAppSelector((state) => {
          console.log('!!!', state)
          return state.tablets.tablets
        });
      case 'accessories':
        return useAppSelector((state) => state.accessories.accessories);
      default:
        return [];
    }
  }; */

  useEffect(() => {
    const products = tablets;
    console.log(products);
    const selectedDevice = products.find((product: ProductDeviceType) => product.id === deviceId);
    setDevice(selectedDevice || null);
  }, [category, deviceId]);

  useEffect(() => {
    console.log('On mount', location, category, deviceId);
  }, []);

  if (!device) {
    return <p>Loading...</p>;
  }

  console.log('ekjbrjkh');

  const { name, images, colorsAvailable, capacityAvailable, description } = device;

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
        <p>Available colors:</p>
        <div>
          {colorsAvailable.map((color) => (
            <p key={color}>{color}</p>
          ))}
        </div>
        <p>Select capacity:</p>
        <div>
          {capacityAvailable.map((capacity) => (
            <p key={capacity}>{capacity}</p>
          ))}
        </div>
      </section>

      <section className="product-details__about">
        <AboutSection description={description} />
      </section>

      <section className="product-details__tech-specs">
        <TechSpecs device={device} />
      </section>

      <section className="product-details__recommended">
        {/* TODO ADD Recommended */}
        Recommended
      </section>
    </div>
  );
};
