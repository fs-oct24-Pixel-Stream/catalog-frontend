import { createSlice } from '@reduxjs/toolkit';
import { CartType } from '../../utils/types/CartType';

type InitialState = {
  cart: CartType[];
};

const initialState: InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
