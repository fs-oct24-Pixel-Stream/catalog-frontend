import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccessories } from '../../api/accessories';
import { ProductDeviceType } from '../../utils/types/ProductDeviceType';

type InitialState = {
  accessories: ProductDeviceType[];
  selectedAccessories: ProductDeviceType | null;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  accessories: [],
  selectedAccessories: null,
  loading: false,
  error: null,
};

export const fetchAccessories = createAsyncThunk('accessories/fetchAccessories', async () => {
  return getAccessories();
});

export const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {
    setSelectedAccessories: (state, { payload }) => {
      const currentAccessoriesById = state.accessories.find(
        (accessory) => accessory.id === payload,
      );
      state.selectedAccessories = currentAccessoriesById || null;
    },
  },
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

export const { setSelectedAccessories } = accessoriesSlice.actions;
