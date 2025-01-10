import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';

export const ProductList = () => {
  return (
    <>
      {/* <div className="secondary-container"> Not Devices Found </div> */}
      <div className="product__list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};
