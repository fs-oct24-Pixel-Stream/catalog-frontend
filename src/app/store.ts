import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { postsSlice } from '../features/products/productsSlice';
import { cartSlice } from '../features/cart/cartSlice';

const rootReducer = combineSlices(cartSlice, postsSlice);

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
