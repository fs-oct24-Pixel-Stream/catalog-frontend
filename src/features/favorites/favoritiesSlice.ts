import { asyncThunkCreator, buildCreateSlice, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCardType } from '../../utils/types/ProductCardType';

type InitialState = {
  products: ProductCardType[];
};

const initialState: InitialState = {
  products: [],
};

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const favoritiesSlice = createSlice({
  name: 'favorities',
  initialState,
  reducers(create) {
    return {
      addFavorite: create.reducer((state, { payload }: PayloadAction<ProductCardType>) => {
        const findInCart = state.products.find((product) => product.id === payload.id);

        if (!findInCart) {
          state.products.push(payload);
        }
      }),

      removeFavorite: create.reducer((state, { payload }: PayloadAction<number>) => {
        state.products = state.products.filter((product) => product.id !== payload);
      }),
    };
  },
});

export const { addFavorite, removeFavorite } = favoritiesSlice.actions;

export default favoritiesSlice.reducer;
