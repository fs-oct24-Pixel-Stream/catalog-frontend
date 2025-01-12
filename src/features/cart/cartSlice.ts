import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType } from '../../utils/types/CartType';
import { ProductCardType } from '../../utils/types/ProductCardType';

type InitialState = {
  cart: CartType[];
};

const initialState: InitialState = {
  cart: [],
};

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const cartSlice = createAppSlice({
  name: 'cart',
  initialState,
  reducers(create) {
    return {
      addProduct: create.reducer((state, { payload }: PayloadAction<ProductCardType>) => {
        const findInCart = state.cart.find((product) => product.id === payload.id);

        if (findInCart) {
          findInCart.quantity += 1;
        } else {
          const updatedProduct: CartType = { ...payload, quantity: 1, isBuy: true };

          state.cart.push(updatedProduct);
        }
      }),

      increaseProduct: create.reducer((state, { payload }: PayloadAction<ProductCardType>) => {
        const findInCart = state.cart.find((product) => product.id === payload.id);

        if (findInCart) {
          findInCart.quantity += 1;
        }
      }),

      decreaseProduct: create.reducer((state, { payload }: PayloadAction<ProductCardType>) => {
        const findInCart = state.cart.find((product) => product.id === payload.id);

        if (findInCart && findInCart.quantity > 1) {
          findInCart.quantity -= 1;
        }
      }),

      removeProduct: create.reducer((state, { payload }: PayloadAction<number>) => {
        state.cart = state.cart.filter((cart) => cart.id !== payload);
      }),

      clearAllProducts: create.reducer((state) => {
        state.cart = [];
      }),
    };
  },
});

export const { addProduct, increaseProduct, decreaseProduct, removeProduct, clearAllProducts } =
  cartSlice.actions;
