import { ProductSlider } from '../ProductSlider';
import { filteredProducts } from '../../utils/functions/filteredProducts';
import { ChooseForFilter } from '../../utils/types/ChooseForFilter';
import { useAppSelector } from '../../app/hooks';

export const NewModelSection = () => {
  const { products } = useAppSelector((state) => state.products);
  const newestProducts = filteredProducts(ChooseForFilter.NEWEST, products).slice(0, 12);

  return (
    <ProductSlider
      products={newestProducts}
      discount={false}
      title={'Brand new models'}
    />
  );
};
