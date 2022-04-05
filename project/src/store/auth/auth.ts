import {createSlice} from '@reduxjs/toolkit';
import {AuthStatus, NameSpace} from '../../const';

export type AuthState = {
  authStatus: AuthStatus,
  isAuthStatusLoading: boolean;
  userLogin: string;
};

const initialState: AuthState = {
  authStatus: AuthStatus.Unknown,
  isAuthStatusLoading: false,
  userLogin: '',
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    changeAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    setAuthStatusLoading: (state, action) => {
      state.isAuthStatusLoading = action.payload;
    },
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { changeAuthStatus, setAuthStatusLoading, setUserLogin } = authSlice.actions;
