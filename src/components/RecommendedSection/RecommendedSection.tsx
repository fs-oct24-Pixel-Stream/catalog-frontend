import React from 'react';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { ProductSlider } from '../ProductSlider';

interface Props {
  products: ProductCardType[];
}

export const RecommendedSection: React.FC<Props> = ({ products }) => {
  return (
    <ProductSlider
      products={products}
      discount={false}
      title={'You may also like'}
    />
  );
};
