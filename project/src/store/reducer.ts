import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity} from './action';

const initialState = {
  activeCity: 'Paris',
  offerList: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state) => {
      state.activeCity = 'Amsterdam';
  });
});
