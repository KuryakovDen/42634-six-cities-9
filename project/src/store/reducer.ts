import {createReducer} from '@reduxjs/toolkit';
import {
  changeActiveLocation,
  changeActiveSortingOption,
  changeAuthStatus,
  loadOffers,
  setError,
  setUserLogin
} from './action';
import {Offer} from '../types/offer';
import {AuthStatus} from '../const';

type initialStateType = {
  authStatus: AuthStatus;
  activeLocation: string;
  activeSortingOption: string;
  offerList: Offer[];
  error: string;
  userLogin: string;
};

const initialState: initialStateType = {
  authStatus: AuthStatus.Unknown,
  activeLocation: 'Paris',
  activeSortingOption: 'Popular',
  offerList: [],
  error: '',
  userLogin: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveLocation, (state, action) => {
      state.activeLocation = action.payload;
    })
    .addCase(changeActiveSortingOption, (state, action) => {
      state.activeSortingOption = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offerList = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserLogin, (state, action) => {
      state.userLogin = action.payload;
    });
});

export {reducer};
