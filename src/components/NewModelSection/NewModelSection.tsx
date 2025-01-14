import React from 'react';
import { ProductSlider } from '../ProductSlider';
import { ProductCardType } from '../../utils/types/ProductCardType';

interface Props {
  products: ProductCardType[];
}

export const NewModelSection: React.FC<Props> = ({ products }) => {
  const highestYear = Math.max(...products.map((product) => product.year));

  const newestProducts = products.filter((product) => product.year === highestYear);

  return (
    <ProductSlider
      products={newestProducts}
      discount={false}
      title={'Brand new models'}
    />
  );
};
