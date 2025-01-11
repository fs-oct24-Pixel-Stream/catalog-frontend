import { ProductCard } from '../ProductCard';
import './ProductList.scss';

export const ProductList = () => {
  return (
    <>
      {/* <div className="secondary-container"> Not Devices Found </div> */}
      <div className="productList">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((card) => (
          <ProductCard key={card} />
        ))}
      </div>
    </>
  );
};
