import { combineReducers } from '@reduxjs/toolkit';
import * as reducers from 'modules/_shared/app/store';

export const rootReducer = combineReducers({ ...reducers });
