import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {authSlice} from './auth/auth';
import {citySlice} from './city/city';
import {commentSlice} from './comment/comment';
import {offerSlice} from './offer/offer';
import {errorSlice} from './error/error';

export const rootReducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.City]: citySlice.reducer,
  [NameSpace.Comment]: commentSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Error]: errorSlice.reducer,
});
