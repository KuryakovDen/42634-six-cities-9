import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {
  changeAuthStatus, checkCommentListLoaded, checkNeighborOffersLoaded,
  loadCommentList,
  loadNeighborOffers,
  loadOffer,
  loadOffers, sendComment,
  setAuthStatusLoading,
  setError, setIsCurrentOfferLoading, setReviewFormBlocked
} from './action';
import {AppRoute, AuthStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {deleteToken, saveToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import ReviewForm from '../components/review-form/review-form';

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
    store.dispatch(setIsCurrentOfferLoading(false));
  } catch (error) {
    store.dispatch(setIsCurrentOfferLoading(false));
    errorHandle(error);
  }
});

export const loadNeighborOffersAction = createAsyncThunk('data/loadNeighborOffers', async (offerId: number | undefined) => {
  try {
    const { data } = await api.get(`${AppRoute.Hotels}/${offerId}/nearby`);
    store.dispatch(loadNeighborOffers(data));
    store.dispatch(checkNeighborOffersLoaded(true));
  } catch (error) {
    store.dispatch(checkNeighborOffersLoaded(true));
    errorHandle(error);
  }
});

export const loadCommentListAction = createAsyncThunk('data/commentList', async (offerId: number | undefined) => {
  try {
    const { data } = await api.get(`${AppRoute.Comments}/${offerId}`);
    store.dispatch(loadCommentList(data));
    store.dispatch(checkCommentListLoaded(true));
  } catch (error) {
    store.dispatch(checkCommentListLoaded(true));
    errorHandle(error);
  }
});

export const sendCommentAction = (offerId: number | undefined, formData: ReviewForm) => createAsyncThunk('data/sendCommentAction', async () => {
  try {
    const { data } = await api.post<ReviewForm | null>(`${AppRoute.Comments}/${offerId}`, formData);
    store.dispatch(sendComment(data));
    store.dispatch(setReviewFormBlocked(false));
  } catch (error) {
    store.dispatch(setReviewFormBlocked(false));
    errorHandle(error);
  }
})();

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
