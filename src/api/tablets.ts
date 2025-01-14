import { client } from '../utils/client/axiosClient';
import { ProductDeviceType } from '../utils/types/ProductDeviceType';

export const getTablets = () => {
  return client.get<ProductDeviceType[]>('/tablets.json');
};
