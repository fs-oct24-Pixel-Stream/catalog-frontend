import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LangState {
  lang: 'en' | 'ua';
}

const initialState: LangState = {
  lang: 'en',
};

export const LanguagesSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ua'>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = LanguagesSlice.actions;
