import { RootState } from 'modules/_shared/store/store';

export const getIsAuth = (state: RootState) => state.authorization.isAuth;
