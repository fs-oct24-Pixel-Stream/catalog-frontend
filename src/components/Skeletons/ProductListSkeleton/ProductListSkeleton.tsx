import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';

export const ProductListSkeleton = () => {
  return (
    <div className="productList">
      {Array.from({ length: 32 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
