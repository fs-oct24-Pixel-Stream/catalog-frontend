import { createSlice } from '@reduxjs/toolkit';
import { ProductCardType } from '../../utils/types/ProductCardType';

type InitialState = {
  products: Record<number, ProductCardType>;
};

const initialState: InitialState = {
  products: {},
};

export const favoritiesSlice = createSlice({
  name: 'favorities',
  initialState,
  reducers: {},
});
