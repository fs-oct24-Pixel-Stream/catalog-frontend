import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';
import { addFavorite, removeFavorite } from '../../features/favorites/favoritiesSlice';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';
import { IconButton } from '../IconButton';
import './ProductActions.scss';
import classNames from 'classnames';
import { ProductCardType } from '../../utils/types/ProductCardType';

type Props = {
  selectedProduct: ProductDeviceType;
};

export const ProductActions: React.FC<Props> = ({ selectedProduct }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.products.products);
  const isDarkTheme = useAppSelector((state) => state.theme.theme) === 'dark';

  const [product, setProduct] = useState<ProductCardType | null>(null);

  const cart = useAppSelector((store) => store.cart.cart);
  const favorites = useAppSelector((store) => store.favorities.products);

  useEffect(() => {
    const device = products.find((device) => device.itemId === selectedProduct.id);
    setProduct(device || null);
  }, [products, selectedProduct]);

  if (!product) {
    return null;
  }

  const isInCart = cart.some((item) => item.id === product.id);
  const isInFavorites = favorites.some((item) => item.id === product.id);

  const getButtonText = isInCart ? 'Added' : 'Add to cart';

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
