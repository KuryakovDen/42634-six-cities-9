import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {changeAuthStatus, loadOffers} from './action';
import {AppRoute, AuthStatus} from '../const';
import {deleteToken, saveToken} from '../services/token';

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export const loadOffersAction = createAsyncThunk('data/loadOffers', async () => {
  const { data } = await api.get(AppRoute.Hotels);
  store.dispatch(loadOffers(data));
});

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  await api.get(AppRoute.Login);
  store.dispatch(changeAuthStatus(AuthStatus.Auth));
});

export const loginAction = createAsyncThunk('user/login', async ({ login: email, password }: AuthData) => {
  const { data: {token} } = await api.post<UserData>(AppRoute.Login, { email, password });
  saveToken(token);
  store.dispatch(changeAuthStatus(AuthStatus.Auth));
});

export const logoutAction = createAsyncThunk('user/logout', async () => {
  await api.delete(AppRoute.Logout);
  deleteToken();
  store.dispatch(changeAuthStatus(AuthStatus.NoAuth));
});
