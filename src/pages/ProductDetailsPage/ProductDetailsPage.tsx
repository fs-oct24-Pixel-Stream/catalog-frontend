import './ProductDetailsPage.scss';
import phones from '../../../public/api/phones.json';

// we will take:
// - all the products from the store,
// - the category and id from useLokation pathname,
// and find the device

const device = phones[0];

export const ProductDetailsPage = () => {
  const {
    name,
    images,
    colorsAvailable,
    capacityAvailable,
    description,
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = device;

  //techSpecs should vary according to product category
  const techSpecs = [screen, resolution, processor, ram, capacity, camera, zoom, cell];
  return (
    <div className="_container product-details">
      <div className="product-details__breadcrumps">
        {/* TODO ADD Breadcrumps */}
        Breadcrumps
      </div>

      <div className="product-details__back-button">
        <button>Back button</button>
      </div>

      <h1 className="product-details__title">{name}</h1>

      <section className="product-details__gallery">
        {/* TODO ADD gallery */}

        <img
          src={images[0]}
          alt={`${name} photo`}
        />
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
        {/* TODO ADD about section */}

        <h2>About</h2>
        <div>{description.toString()}</div>
      </section>

      <section className="product-details__tech-specs">
        {/* TODO ADD tech-specs section */}

        <h2>Tech specs</h2>
        <div>{techSpecs}</div>
      </section>

      <section className="product-details__recommended">
        {/* TODO ADD Recommended */}
        Recommended
      </section>
    </div>
  );
};
