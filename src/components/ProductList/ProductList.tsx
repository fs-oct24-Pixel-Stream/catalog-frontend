import React from 'react';

import { ProductCardType } from '../../utils/types/ProductCardType';

import { ProductCard } from '../ProductCard';

import './ProductList.scss';

type Props = {
  products: ProductCardType[];
};
export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <>
      {/* <div className="secondary-container"> Not Devices Found </div> */}
      <div className="productList">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            discount={true}
          />
        ))}
      </div>
    </>
  );
};
