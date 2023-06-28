import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TAppState, TDirection } from 'store/modules/app/types';
import type { Locale } from 'antd/es/locale';
import localeRu from 'antd/locale/ru_RU';

const initialState: TAppState = {
  isLoading: false,
  isDarkMode: false,
  locale: localeRu,
  direction: 'ltr',
};

const appSlice = createSlice({
  name: 'app',
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
  },
});

export const { setIsLoading, setIsDarkMode, setLocale, setDirection } =
  appSlice.actions;

export default appSlice.reducer;
