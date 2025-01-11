import { client } from '../utils/client/axiosClient';
import { ProductCardType } from '../utils/types/ProductCardType';

export const getTablets = () => {
  return client.get<ProductCardType[]>('/tablets.json');
};
