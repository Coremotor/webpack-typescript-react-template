import { combineReducers } from '@reduxjs/toolkit';
import * as reducers from 'store/modules';

export const rootReducer = combineReducers({ ...reducers });
