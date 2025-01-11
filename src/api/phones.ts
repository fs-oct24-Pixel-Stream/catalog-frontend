import { client } from '../utils/client/axiosClient';
import { ProductCardType } from '../utils/types/ProductCardType';

export const getPhones = () => {
  return client.get<ProductCardType[]>('/phones.json');
};
