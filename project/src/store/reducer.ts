import {createReducer} from '@reduxjs/toolkit';
import {changeActiveLocation, changeActiveSortingOption, loadOffers} from './action';
import {Offer} from '../types/offer';
import {AuthStatus} from '../const';

type initialStateType = {
  authStatus: AuthStatus;
  activeLocation: string;
  activeSortingOption: string;
  offerList: Offer[];
};

const initialState: initialStateType = {
  authStatus: AuthStatus.Unknown,
  activeLocation: 'Paris',
  activeSortingOption: 'Popular',
  offerList: [],
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
    });
});

export {reducer};
