import { createSlice } from '@reduxjs/toolkit';
import { ProductCardType } from '../../utils/types/ProductCardType';

type InitialState = {
  products: ProductCardType[];
  loadind: boolean;
  error: string | null;
};

const initialState: InitialState = {
  products: [],
  loadind: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
