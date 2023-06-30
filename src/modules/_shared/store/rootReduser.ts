import { combineReducers } from '@reduxjs/toolkit';
import * as reducers from 'modules/_shared/store/index';

export const rootReducer = combineReducers({ ...reducers });
