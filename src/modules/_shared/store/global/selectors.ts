import { TState } from 'modules/_shared/store/store';

export const getIsLoading = (state: TState) => state.global.isLoading;
export const getLocale = (state: TState) => state.global.locale;
export const getDirection = (state: TState) => state.global.direction;
export const getError = (state: TState) => state.global.error;
