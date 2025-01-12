import { client } from '../utils/client/axiosClient';
import { ProductCardType } from '../utils/types/ProductCardType';

export const getAccessories = () => {
  return client.get<ProductCardType[]>('/accessories.json');
};
