import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType } from '../../utils/types/CartType';
import { ProductCardType } from '../../utils/types/ProductCardType';

type InitialState = {
  productsCart: Record<number, CartType>;
};

const initialState: InitialState = {
  productsCart: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, { payload }: PayloadAction<ProductCardType>) => {
      if (state.productsCart[payload.id]) {
        state.productsCart[payload.id].quantity += 1;
      } else {
        state.productsCart[payload.id] = {
          ...payload,
          quantity: 1,
          isBuy: true,
        };
      }
    },

    deleteProductFromCart: (state, { payload }: PayloadAction<number>) => {
      //payload is product.id
      delete state.productsCart[payload];
    },

    //I created this function, if it is not needed, then we will delete it
    isBuy: (state, { payload }: PayloadAction<number>) => {
      //payload is product.id
      if (state.productsCart[payload]) {
        state.productsCart[payload].isBuy = !state.productsCart[payload].isBuy;
      }
    },

    incrementProduct: (state, { payload }: PayloadAction<number>) => {
      //payload is product.id
      if (state.productsCart[payload]) {
        state.productsCart[payload].quantity += 1;
      }
    },
    decrementProduct: (state, { payload }: PayloadAction<number>) => {
      //payload is product.id
      if (state.productsCart[payload] && state.productsCart[payload].quantity > 1) {
        state.productsCart[payload].quantity -= 1;
      }
    },
  },
});

export const {
  addProductToCart,
  deleteProductFromCart,
  isBuy,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;
