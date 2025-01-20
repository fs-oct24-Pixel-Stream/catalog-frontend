import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPhones, setSelectedPhone } from '../../features/phones/phonesSlice';
import { fetchTablets, setSelectedTablet } from '../../features/tablets/tabletsSlice';
import {
  fetchAccessories,
  setSelectedAccessories,
} from '../../features/accessories/accessoriesSlice';
import { ColorKey } from '../../utils/types/colors';

import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton/BackButton';
import { RecommendedSection } from '../../components/RecommendedSection';
import { ProductParamsSelects } from '../../components/ProductParamsSelects/ProductParamsSelects';
import { ProductActions } from '../../components/ProductActions/ProductActions';
import { NotFoundPage } from '../NotFoundPage';

import { AboutSkeleton } from '../../components/Skeletons/AboutSkeleton/AboutSkeleton';
import { ImageGallerySkeleton } from '../../components/Skeletons/ImageGallerySkeleton/ImageGallerySkeleton';
import { ProductParamsSelectsSkeleton } from '../../components/Skeletons/ProductParamsSelectsSkeleton/ProductParamsSelectsSkeleton';
import { ActionsButtonsSkeleton } from '../../components/Skeletons/ActionsButtonsSkeleton/ActionsButtonsSkeleton';
import { PriceSkeleton } from '../../components/Skeletons/PriceSkeleton/PriceSkeleton';
import { TechSpecsSkeleton } from '../../components/Skeletons/TechSpecsSkeleton/TechSpecsSkeleton';

import './ProductDetailsPage.scss';

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
  const { t } = useTranslation();

  const category = location.pathname.split('/')[1];
  const deviceId = location.pathname.split('/')[2];
  const baseId = deviceId
    .split('-')
    .slice(0, deviceId.split('-').length - 2)
    .join('-');

  const categoryToFetch = categoryMap[category as keyof typeof categoryMap];

  const { fetchAction, setSelectedAction, selector } = categoryToFetch;

  const isLoading = useAppSelector(categoryToFetch.loadingSelector);

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

  if (!isLoading && !selectedProduct) {
    return <NotFoundPage />;
  }

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
        {isLoading || !selectedProduct ?
          <ImageGallerySkeleton />
        : <ProductGallery
            images={images}
            name={name}
          />
        }
      </section>

      <section className="product-details__parameters">
        {!isLoading && selectedProduct ?
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
        : <ProductParamsSelectsSkeleton />}

        <div className="is-flex product-details__price">
          <p className="product-details__price--full">
            {!isLoading ? `$${priceDiscount}` : <PriceSkeleton />}
          </p>
          <p className="product-details__price--discount">
            {!isLoading ? `$${priceRegular}` : <PriceSkeleton />}
          </p>
        </div>

        {!isLoading && selectedProduct ?
          <ProductActions selectedProduct={selectedProduct} />
        : <ActionsButtonsSkeleton />}

        {!isLoading && selectedProduct ?
          <TechSpecs
            device={selectedProduct}
            category={category}
            variant="short"
          />
        : <TechSpecsSkeleton variant="short" />}
        <div className="product-details__id">{`ID: ${id}`}</div>
      </section>

      <section className="product-details__about">
        <h3 className="product-details__subtitle">{t('about')}</h3>
        <div className="product-details__line" />
        {isLoading || !selectedProduct ?
          <AboutSkeleton />
        : <AboutSection description={description} />}
      </section>

      <section className="product-details__tech-specs">
        <h3 className="product-details__subtitle">{t('techSpecs')}</h3>
        <div className="product-details__line" />

        {!isLoading && selectedProduct ?
          <TechSpecs
            device={selectedProduct}
            category={category}
            variant="full"
          />
        : <TechSpecsSkeleton variant="full" />}
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
