import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Our local storage.

import { productSlice } from '../features/products/productsSlice';
import { cartSlice } from '../features/cart/cartSlice';
import { favoritiesSlice } from '../features/favorites/favoritiesSlice';
import { phonesSlice } from '../features/phones/phonesSlice';
import { tabletsSlice } from '../features/tablets/tabletsSlice';
import { accessoriesSlice } from '../features/accessories/accessoriesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favorities'],
};

const rootReducer = combineSlices(
  cartSlice,
  productSlice,
  phonesSlice,
  tabletsSlice,
  accessoriesSlice,
  favoritiesSlice,
);

const persistedReducer = persistReducer(persistConfig, rootReducer);
// i changed rootReducer to persistedReducer  because it's links in persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // this is what causes the error in our console so we need to ignore it.
      },
    }),
});

export const persistor = persistStore(store); // persistor
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
