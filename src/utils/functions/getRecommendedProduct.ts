import { ProductCardType } from '../types/ProductCardType';

export const getRecommendedProduct = (
  products: ProductCardType[],
  price: number,
  category: string,
) => {
  return products
    .filter(
      (product) =>
        product.category === category &&
        product.fullPrice >= price &&
        product.fullPrice <= price * 1.3,
    )
    .slice(0, 12);
};
