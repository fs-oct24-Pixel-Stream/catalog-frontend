import React from "react";
import { ProductSlider } from "../ProductSlider";
import { ProductCardType } from "../../utils/types/ProductCardType";

interface Props {
  products: ProductCardType[];
}

export const NewModelSection: React.FC<Props> = ({ products }) => {
  const latestYear = Math.max(...products.map(product => product.year));

  const newestProducts = products.filter(
    product => product.year === latestYear,
  );

  return (
    <ProductSlider products={newestProducts} title={'Brand new models'}/>
  );
}