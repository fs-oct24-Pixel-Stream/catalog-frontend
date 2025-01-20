import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import { addFavorite, removeFavorite } from '../../features/favorites/favoritiesSlice';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';
import { ProductCardType } from '../../utils/types/ProductCardType';

import { IconButton } from '../IconButton';

import './ProductActions.scss';

type Props = {
  selectedProduct: ProductDeviceType;
};

const transformProductType = (
  selectedProduct: ProductDeviceType,
  products: ProductCardType[],
): ProductCardType | null => {
  return products.find((device) => device.itemId === selectedProduct.id) || null;
};

export const ProductActions: React.FC<Props> = ({ selectedProduct }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.products.products);
  const isDarkTheme = useAppSelector((state) => state.theme.theme) === 'dark';
  const { t } = useTranslation();

  const cart = useAppSelector((store) => store.cart.cart);
  const favorites = useAppSelector((store) => store.favorities.products);

  const product = useMemo(
    () => transformProductType(selectedProduct, products),
    [selectedProduct, products],
  );

  if (!product) {
    return null;
  }

  const isInCart = cart.some((item) => item.id === product.id);
  const isInFavorites = favorites.some((item) => item.id === product.id);

  const getButtonText = isInCart ? t('added') : t('addToCart');

  const handleBuyProduct = () => {
    if (isInCart) {
      dispatch(removeProduct(product.id));
    } else {
      dispatch(addProduct(product));
    }
  };

  const handleAddFavorite = () => {
    if (isInFavorites) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div className="is-flex is-justify-content-space-between actions-buttons">
      <button
        onClick={handleBuyProduct}
        className={classNames('button', 'actions-buttons__buy btn', {
          'actions-buttons__buy--active': isInCart,
          'btn--dark': isDarkTheme,
        })}
      >
        {getButtonText}
      </button>

      <IconButton
        onClick={handleAddFavorite}
        className={classNames({
          'actions-buttons__wishlist': !isInFavorites,
          'actions-buttons__wishlist--active': isInFavorites,
        })}
      />
    </div>
  );
};
