import { client } from '../utils/client/axiosClient';
import { ProductCardType } from '../utils/types/ProductCardType';

export const getProducts = () => {
  return client.get<ProductCardType[]>('/products.json');
};
