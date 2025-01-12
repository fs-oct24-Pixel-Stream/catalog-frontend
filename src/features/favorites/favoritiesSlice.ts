import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    addFavorite: (state, action: PayloadAction<ProductCardType>) => {
      const product = action.payload;

      if (!state.products[product.id]) {
        state.products[product.id] = product;
      }
    },

    removeFavorite: (state, action: PayloadAction<number>) => {
      delete state.products[action.payload];
    },
  },
});

export const { addFavorite, removeFavorite } = favoritiesSlice.actions;

export default favoritiesSlice.reducer;