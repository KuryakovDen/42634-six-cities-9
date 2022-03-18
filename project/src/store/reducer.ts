import {createReducer} from '@reduxjs/toolkit';
import {
  changeActiveLocation,
  changeActiveSortingOption,
  changeAuthStatus, loadcommentList, loadNeighborOffers, loadOffer,
  loadOffers, setAuthStatusLoading,
  setError,
  setUserLogin
} from './action';
import {Offer} from '../types/offer';
import {AuthStatus} from '../const';
import {Review} from '../types/review';

type initialStateType = {
  isAuthStatusLoading: boolean;
  authStatus: AuthStatus;
  activeLocation: string;
  activeSortingOption: string;
  offerList: Offer[];
  currentOffer: Offer | null;
  neighborOffers: Offer[] | [];
  commentList: Review[] | [];
  error: string;
  userLogin: string;
};

const initialState: initialStateType = {
  isAuthStatusLoading: false,
  authStatus: AuthStatus.Unknown,
  activeLocation: 'Paris',
  activeSortingOption: 'Popular',
  offerList: [],
  currentOffer: null,
  neighborOffers: [],
  commentList: [],
  error: '',
  userLogin: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveLocation, (state, action) => {
      state.activeLocation = action.payload;
    })
    .addCase(changeActiveSortingOption, (state, action) => {
      state.activeSortingOption = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offerList = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNeighborOffers, (state, action) => {
      state.neighborOffers = action.payload;
    })
    .addCase(loadcommentList, (state, action) => {
      state.commentList = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserLogin, (state, action) => {
      state.userLogin = action.payload;
    })
    .addCase(setAuthStatusLoading, (state, action) => {
      state.isAuthStatusLoading = action.payload;
    });
});

export {reducer};
