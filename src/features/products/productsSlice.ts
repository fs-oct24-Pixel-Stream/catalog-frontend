import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { getProducts } from '../../api/products';

type InitialState = {
  products: ProductCardType[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return getProducts();
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => ({
      ...state,
      products: payload,
      loading: false,
    }));
    builder.addCase(fetchProducts.rejected, (state) => ({
      ...state,
      loading: false,
      error: 'Error loading products',
    }));
  },
});
