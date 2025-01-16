import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPhones } from '../../api/phones';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';

type InitialState = {
  phones: ProductDeviceType[];
  selectedPhone: ProductDeviceType | null;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  phones: [],
  selectedPhone: null,
  loading: false,
  error: null,
};

export const fetchPhones = createAsyncThunk('phones/fetchPhones', async () => {
  return getPhones();
});

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    setSelectedPhone: (state, { payload }) => {
      const currentPhoneById = state.phones.find((phone) => phone.id === payload);
      state.selectedPhone = currentPhoneById || null;
    },
  },
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

export const { setSelectedPhone } = phonesSlice.actions;
