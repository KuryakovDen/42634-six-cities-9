import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

type CityState = {
  activeLocation: string;
};

const initialState: CityState = {
  activeLocation: 'Paris'
};

export const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeActiveLocation: (state, action) => {
      state.activeLocation = action.payload;
    }
  }
});

export const { changeActiveLocation } = citySlice.actions;
