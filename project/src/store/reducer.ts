import {createReducer} from '@reduxjs/toolkit';
import {changeActiveLocation, changeActiveSortingOption, loadOffers} from './action';
import {Offer} from '../types/offer';

type initialStateType = {
  activeLocation: string;
  activeSortingOption: string;
  offerList: Offer[] | null;
};

const initialState: initialStateType = {
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
