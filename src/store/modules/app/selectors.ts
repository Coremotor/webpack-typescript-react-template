import { TState } from 'store/store';

export const getIsLoading = (state: TState) => state.app.isLoading;
export const getIsDarkMode = (state: TState) => state.app.isDarkMode;
export const getLocale = (state: TState) => state.app.locale;
export const getDirection = (state: TState) => state.app.direction;
