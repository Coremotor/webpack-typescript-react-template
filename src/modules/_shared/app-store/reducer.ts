import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TAppState, TDirection } from 'modules/_shared/app-store/types';
import type { Locale } from 'antd/es/locale';
import localeRu from 'antd/locale/ru_RU';

const initialState: TAppState = {
  isLoading: false,
  isDarkMode: false,
  locale: localeRu,
  direction: 'ltr',
  error: null,
};

const appSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading(state: TAppState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsDarkMode(state: TAppState, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    },
    setLocale(state: TAppState, action: PayloadAction<Locale>) {
      state.locale = action.payload;
    },
    setDirection(state: TAppState, action: PayloadAction<TDirection>) {
      state.direction = action.payload;
    },
    setError(state: TAppState, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setIsLoading, setLocale, setDirection, setError } =
  appSlice.actions;

export default appSlice.reducer;
