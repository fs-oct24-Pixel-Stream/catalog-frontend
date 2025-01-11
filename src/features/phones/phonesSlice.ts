import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductCardType } from '../../utils/types/ProductCardType';
import { getPhones } from '../../api/phones';

type InitialState = {
  phones: ProductCardType[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  phones: [],
  loading: false,
  error: null,
};

export const fetchPhones = createAsyncThunk('phones/fetchPhones', async () => {
  return getPhones();
});

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhones.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(fetchPhones.fulfilled, (state, { payload }) => ({
      ...state,
      phones: payload,
      loading: false,
    }));
    builder.addCase(fetchPhones.rejected, (state) => ({
      ...state,
      loading: false,
      error: 'Error loading phones',
    }));
  },
});
