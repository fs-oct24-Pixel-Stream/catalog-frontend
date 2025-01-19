import './ProductDetailsPage.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ColorKey } from '../../utils/types/colors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPhones, setSelectedPhone } from '../../features/phones/phonesSlice';
import {
  fetchAccessories,
  setSelectedAccessories,
} from '../../features/accessories/accessoriesSlice';
import { fetchTablets, setSelectedTablet } from '../../features/tablets/tabletsSlice';
import { RecommendedSection } from '../../components/RecommendedSection';
import { ProductParamsSelects } from '../../components/ProductParamsSelects/ProductParamsSelects';
import { ProductActions } from '../../components/ProductActions/ProductActions';
import { NotFoundPage } from '../NotFoundPage';

const categoryMap = {
  phones: {
    fetchAction: fetchPhones,
    setSelectedAction: setSelectedPhone,
    selector: (state: any) => state.phones.selectedPhone,
    loadingSelector: (state: any) => state.phones.loading,
  },
  accessories: {
    fetchAction: fetchAccessories,
    setSelectedAction: setSelectedAccessories,
    selector: (state: any) => state.accessories.selectedAccessories,
    loadingSelector: (state: any) => state.accessories.loading,
  },
  tablets: {
    fetchAction: fetchTablets,
    setSelectedAction: setSelectedTablet,
    selector: (state: any) => state.tablets.selectedTablet,
    loadingSelector: (state: any) => state.tablets.loading,
  },
};

export const ProductDetailsPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname.split('/')[1];
  const deviceId = location.pathname.split('/')[2];
  const baseId = deviceId
    .split('-')
    .slice(0, deviceId.split('-').length - 2)
    .join('-');

  const categoryToFetch = categoryMap[category as keyof typeof categoryMap];

  const { fetchAction, setSelectedAction, selector } = categoryToFetch;

  // const isLoading = useAppSelector(categoryToFetch.loadingSelector);
  const selectedProduct = useAppSelector(selector);

  useEffect(() => {
    dispatch(fetchAction());
    dispatch(setSelectedAction(deviceId));

    const fetchData = async () => {
      await dispatch(fetchAction());
      dispatch(setSelectedAction(deviceId));
    };

    if (!selectedProduct) {
      fetchData();
    }
  }, [, dispatch, fetchAction, setSelectedAction, deviceId]);

  const {
    name,
    images,
    colorsAvailable,
    capacityAvailable,
    description,
    color,
    capacity,
    priceRegular,
    priceDiscount,
    id,
  } = selectedProduct || {};

  /* if (selectedProduct?.id !== deviceId) {
    return <p>Loading...</p>;
  } */

  /*  if (isLoading) {
    return <p>Loading...</p>;
  } */

  if (!selectedProduct) {
    return <NotFoundPage />;
  }

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
        <ProductParamsSelects
          colorsAvailable={colorsAvailable}
          capacityAvailable={capacityAvailable}
          id={id}
          category={category}
          color={color}
          capacity={capacity}
          onColorChange={handleColorChange}
          onCapasityChange={handleCapasityChange}
        />

        <div className="is-flex product-details__price">
          <p className="product-details__price--full">${priceDiscount}</p>
          <p className="product-details__price--discount">${priceRegular}</p>
        </div>

        <ProductActions selectedProduct={selectedProduct} />

        <TechSpecs
          device={selectedProduct}
          category={category}
          variant="short"
        />
        <div className="product-details__id">{`ID: ${id}`}</div>
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
          device={selectedProduct}
          category={category}
          variant="full"
        />
      </section>

      <section className="product-details__recommended">
        <RecommendedSection
          price={priceRegular}
          category={category}
        />
      </section>
    </div>
  );
};
