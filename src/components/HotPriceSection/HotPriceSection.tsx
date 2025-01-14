import { ProductCardType } from "../../utils/types/ProductCardType";
import { ProductSlider } from "../ProductSlider";

interface Props {
  products: ProductCardType[];
}

export const HotPriceSection: React.FC<Props> = ({ products }) => {
  const getDiscount = (product: ProductCardType) => product.fullPrice - product.price;

  const productWithDiscount = products
  .filter(product => getDiscount(product) > 0)
  .sort((a, b) => getDiscount(b) - getDiscount(a))
  .sort(() => Math.random() - 0.5);


  return (
    <ProductSlider
      products={productWithDiscount}
      discount={true}
      title={'Hot prices'}
    />
  );
};
