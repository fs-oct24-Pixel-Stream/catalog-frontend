import axios from 'axios';

const instance = axios.create({
  baseURL: 'api',
});

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);
    return response.data;
  },
};
