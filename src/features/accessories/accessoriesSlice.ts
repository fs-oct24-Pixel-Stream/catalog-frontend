import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccessories } from '../../api/accessories';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';

type InitialState = {
  accessories: ProductDeviceType[];
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
