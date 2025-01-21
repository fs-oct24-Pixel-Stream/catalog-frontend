import { ChooseForFilter } from '../types/ChooseForFilter';
import { ProductCardType } from '../types/ProductCardType';

export const filteredProducts = (filterName: ChooseForFilter, products: ProductCardType[]) => {
  switch (filterName) {
    case ChooseForFilter.CHEAPEST:
      return [...products].sort(
        (productPrev, productCurrent) => productPrev.price - productCurrent.price,
      );
    case ChooseForFilter.EXPENSIVE:
      return [...products].sort(
        (productPrev, productCurrent) => productCurrent.price - productPrev.price,
      );
    case ChooseForFilter.NEWEST:
      return [...products].sort(
        (productPrev, productCurrent) => productCurrent.year - productPrev.year,
      );
    case ChooseForFilter.CHEAPESTUrk:
      return [...products].sort(
        (productPrev, productCurrent) => productPrev.price - productCurrent.price,
      );
    case ChooseForFilter.EXPENSIVEUrk:
      return [...products].sort(
        (productPrev, productCurrent) => productCurrent.price - productPrev.price,
      );
    case ChooseForFilter.NEWESTUrk:
      return [...products].sort(
        (productPrev, productCurrent) => productCurrent.year - productPrev.year,
      );
    default:
      return products;
  }
};
