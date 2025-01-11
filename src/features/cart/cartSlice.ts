/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
// import { ProductCardType } from '../../utils/types/ProductCardType';
type InitialState = {
  productsCart: { [key: number]: number } | {};
};

const initialState: InitialState = {
  productsCart: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});
