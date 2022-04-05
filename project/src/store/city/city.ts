import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

export type CityState = {
  locationList: string[] | [];
  activeLocation: string;
};

const initialState: CityState = {
  locationList: [],
  activeLocation: 'Paris',
};

export const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    setLocationList: (state, action) => {
      state.locationList = action.payload;
    },
    changeActiveLocation: (state, action) => {
      state.activeLocation = action.payload;
    },
  },
});

export const { setLocationList, changeActiveLocation } = citySlice.actions;
