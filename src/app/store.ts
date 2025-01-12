import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { productSlice } from '../features/products/productsSlice';
import { cartSlice } from '../features/cart/cartSlice';
import { favoritiesSlice } from '../features/favorites/favoritiesSlice';
import { phonesSlice } from '../features/phones/phonesSlice';
import { tabletsSlice } from '../features/tablets/tabletsSlice';
import { accessoriesSlice } from '../features/accessories/accessoriesSlice';

const rootReducer = combineSlices(
  cartSlice,
  productSlice,
  phonesSlice,
  tabletsSlice,
  accessoriesSlice,
  favoritiesSlice,
);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
