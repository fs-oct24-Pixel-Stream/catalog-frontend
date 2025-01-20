import React, { useEffect, useState } from 'react';

import { ProductCardType } from '../../utils/types/ProductCardType';
import { getRecommendedProduct } from '../../utils/functions/getRecommendedProduct';

import { ProductSlider } from '../ProductSlider';
import { useAppSelector } from '../../app/hooks';

interface Props {
  price: number;
  category: string;
}

export const RecommendedSection: React.FC<Props> = ({ price, category }) => {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductCardType[]>([]);
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    setRecommendedProducts(getRecommendedProduct(products, price, category));
  }, [products, price, category]);

  return (
    <ProductSlider
      products={recommendedProducts}
      discount={true}
      title={'You may also like'}
    />
  );
};
