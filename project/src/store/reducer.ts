import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, setOfferList} from './action';
import {Offer} from '../types/offer';

type initialStateType = {
  activeCity: string;
  offerList: Offer[] | null;
};

const initialState: initialStateType = {
  activeCity: 'Amsterdam',
  offerList: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOfferList, (state) => {
      state.offerList = offers;
    });
});

export {reducer};
