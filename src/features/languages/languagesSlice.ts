import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanuageType } from '../../utils/types/language';

interface LangState {
  lang: LanuageType;
}

const initialState: LangState = {
  lang: 'en',
};

export const LanguagesSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanuageType>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = LanguagesSlice.actions;
