import { client } from '../utils/client/axiosClient';
import { ProductDeviceType } from '../utils/types/ProductDeviceType';

export const getAccessories = () => {
  return client.get<ProductDeviceType[]>('/accessories.json');
};
