import { RootState } from 'modules/_shared/root-store/store';

export const getIsLoading = (state: RootState) => state.global.isLoading;
export const getLocale = (state: RootState) => state.global.locale;
export const getDirection = (state: RootState) => state.global.direction;
export const getError = (state: RootState) => state.global.error;
