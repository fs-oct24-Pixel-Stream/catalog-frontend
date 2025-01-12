import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { getAccessories } from '../../api/accessories';

type InitialState = {
  accessories: ProductCardType[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  accessories: [],
  loading: false,
  error: null,
};

export const fetchAccessories = createAsyncThunk('accessories/fetchAccessories', async () => {
  return getAccessories();
});

export const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccessories.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(fetchAccessories.fulfilled, (state, { payload }) => ({
      ...state,
      accessories: payload,
      loading: false,
    }));
    builder.addCase(fetchAccessories.rejected, (state) => ({
      ...state,
      loading: false,
      error: 'Error loading accessories',
    }));
  },
});
