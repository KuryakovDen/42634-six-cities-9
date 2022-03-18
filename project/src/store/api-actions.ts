import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {changeAuthStatus, loadNeighborOffers, loadOffer, loadOffers, setAuthStatusLoading, setError} from './action';
import {AppRoute, AuthStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {deleteToken, saveToken} from '../services/token';
import {errorHandle} from '../services/error-handle';

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
  try {
    const { data } = await api.get(AppRoute.Hotels);
    store.dispatch(loadOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const loadOfferAction = createAsyncThunk('data/loadOffer', async (offerId: number | undefined) => {
  try {
    const { data } = await api.get(`${AppRoute.Hotels}/${offerId}`);
    store.dispatch(loadOffer(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const loadNeighborOffersAction = createAsyncThunk('data/loadNeighborOffers', async (offerId: number | undefined) => {
  try {
    const { data } = await api.get(`${AppRoute.Hotels}/${offerId}/nearby`);
    store.dispatch(loadNeighborOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    await api.get(AppRoute.Login);
    store.dispatch(changeAuthStatus(AuthStatus.Auth));
    store.dispatch(setAuthStatusLoading(true));
  } catch (error) {
    errorHandle(error);
    store.dispatch(changeAuthStatus(AuthStatus.NoAuth));
    store.dispatch(setAuthStatusLoading(true));
  }
});

export const loginAction = createAsyncThunk('user/login', async ({ login: email, password }: AuthData) => {
  try {
    const { data: {token} } = await api.post<UserData>(AppRoute.Login, { email, password });
    saveToken(token);
    store.dispatch(changeAuthStatus(AuthStatus.Auth));
  } catch (error) {
    errorHandle(error);
    store.dispatch(changeAuthStatus(AuthStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(AppRoute.Logout);
    deleteToken();
    store.dispatch(changeAuthStatus(AuthStatus.NoAuth));
  } catch (error) {
    errorHandle(error);
  }
});

export const clearErrorAction = createAsyncThunk('data/clearError', async () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});
