import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

export type ErrorState = {
  error: string;
};

const initialState: ErrorState = {
  error: '',
};

export const errorSlice = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorSlice.actions;
