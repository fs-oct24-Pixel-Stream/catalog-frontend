import { createSlice } from '@reduxjs/toolkit';

type BurgerState = {
  burgerStatus: boolean;
};

const initialState: BurgerState = {
  burgerStatus: false,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setBurgerState(state) {
      return {
        burgerStatus: !state.burgerStatus,
      };
    },
  },
});

export const { setBurgerState } = burgerSlice.actions;
