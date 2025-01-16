import { ProductCardType } from '../types/ProductCardType';

export const getHotPriceProducts = (products: ProductCardType[]): ProductCardType[] => {
  const getDiscount = (product: ProductCardType) => product.fullPrice - product.price;

  return products
    .filter((product) => getDiscount(product) > 0)
    .sort((a, b) => getDiscount(b) - getDiscount(a))
    .sort(() => Math.random() - 0.5)
    .slice(0, 12);
};
