import './ProductDetailsPage.scss';
import phones from '../../../public/api/phones.json';
import { BackButton } from '../../components/BackButton/BackButton';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
// import { useAppSelector } from '../../app/hooks';
// import { useLocation } from 'react-router';
// import { ProductDeviceType } from '../../utils/types/ProductDeviceType';
// import { useState } from 'react';

const device = phones[0];

export const ProductDetailsPage = () => {
  // const location = useLocation();

  // const category = location.pathname.split('/')[1];
  // const deviceId = location.pathname.split('/')[2];
  // const products = useAppSelector((state) => state.products.products);

  // const [device, setDevice] = useState<ProductDeviceType | null>(null);

  // const selectedDevice = products.find((product) => product.itemId === device?.id);

  const { name, images, colorsAvailable, capacityAvailable, description } = device;

  //techSpecs should vary according to product category, which we will take from the pathname
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
        <ProductGallery images={images} name={name} />
      </section>

      <section className="product-details__parameters">
        {/* TODO ADD parameters section */}

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
        {
          //a few reusable components: button, add to fav, short Techspecs
        }
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
