import { client } from '../utils/client/axiosClient';
import { ProductDeviceType } from '../utils/types/ProductDeviceType';

export const getPhones = () => {
  return client.get<ProductDeviceType[]>('/phones.json');
};
