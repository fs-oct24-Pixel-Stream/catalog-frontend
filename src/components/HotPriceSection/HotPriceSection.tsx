import { useAppSelector } from '../../app/hooks';
import { getHotPriceProducts } from '../../utils/functions/getHotPriceProducts';
import { ProductSlider } from '../ProductSlider';

export const HotPriceSection = () => {
  const { products } = useAppSelector((state) => state.products);
  const productWithDiscount = getHotPriceProducts(products);

  return (
    <ProductSlider
      products={productWithDiscount}
      discount={true}
      title={'Hot prices'}
    />
  );
};
