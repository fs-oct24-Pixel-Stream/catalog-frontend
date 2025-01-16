import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTablets } from '../../api/tablets';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';

type InitialState = {
  tablets: ProductDeviceType[];
  selectedTablet: ProductDeviceType | null;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  tablets: [],
  selectedTablet: null,
  loading: false,
  error: null,
};

export const fetchTablets = createAsyncThunk('tablets/fetchTablets', async () => {
  return getTablets();
});

export const tabletsSlice = createSlice({
  name: 'tablets',
  initialState,
  reducers: {
    setSelectedTablet: (state, { payload }) => {
      const currentTabletById = state.tablets.find((tablet) => tablet.id === payload);
      state.selectedTablet = currentTabletById || null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTablets.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(fetchTablets.fulfilled, (state, { payload }) => ({
      ...state,
      tablets: payload,
      loading: false,
    }));
    builder.addCase(fetchTablets.rejected, (state) => ({
      ...state,
      loading: false,
      error: 'Error loading tablets',
    }));
  },
});

export const { setSelectedTablet } = tabletsSlice.actions;
