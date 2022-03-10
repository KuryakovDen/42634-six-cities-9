import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeActiveLocation, changeActiveSortingOption, setOfferList} from './action';
import {Offer} from '../types/offer';

type initialStateType = {
  activeLocation: string;
  activeSortingOption: string;
  offerList: Offer[] | null;
};

const initialState: initialStateType = {
  activeLocation: 'Paris',
  activeSortingOption: 'Popular',
  offerList: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveLocation, (state, action) => {
      state.activeLocation = action.payload;
    })
    .addCase(changeActiveSortingOption, (state, action) => {
      state.activeSortingOption = action.payload;
    })
    .addCase(setOfferList, (state) => {
      state.offerList = offers;
    });
});

export {reducer};
