import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { getProducts } from '../../api/products';

type InitialState = {
  products: ProductCardType[];
  selectedProduct: ProductCardType | null;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return getProducts();
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, { payload }) => {
      const currentProductById = state.products.find((product) => product.itemId === payload);
      state.selectedProduct = currentProductById || null;
    },
  },
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

export const { setSelectedProduct } = productSlice.actions;
