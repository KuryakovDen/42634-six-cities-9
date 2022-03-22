import {createReducer} from '@reduxjs/toolkit';
import {
  changeActiveLocation,
  changeActiveSortingOption,
  changeAuthStatus, checkCommentListLoaded, checkNeighborOffersLoaded, loadCommentList, loadNeighborOffers, loadOffer,
  loadOffers, sendNewCommentList, setAuthStatusLoading,
  setError, setIsCurrentOfferLoading, setReviewFormBlocked,
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
  isCurrentOfferLoading: boolean;
  neighborOffers: Offer[] | [];
  isNeighborOffersLoaded: boolean;
  commentList: Review[] | [];
  isCommentListLoaded: boolean;
  isReviewFormBlocked: boolean;
  newCommentList: Review[] | [];
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
  isCurrentOfferLoading: true,
  neighborOffers: [],
  isNeighborOffersLoaded: false,
  commentList: [],
  isCommentListLoaded: false,
  isReviewFormBlocked: false,
  newCommentList: [],
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
    .addCase(setIsCurrentOfferLoading, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(loadNeighborOffers, (state, action) => {
      state.neighborOffers = action.payload;
    })
    .addCase(checkNeighborOffersLoaded, (state, action) => {
      state.isNeighborOffersLoaded = action.payload;
    })
    .addCase(loadCommentList, (state, action) => {
      state.commentList = action.payload;
    })
    .addCase(sendNewCommentList, (state, action) => {
      state.newCommentList = action.payload;
    })
    .addCase(checkCommentListLoaded, (state, action) => {
      state.isCommentListLoaded = action.payload;
    })
    .addCase(setReviewFormBlocked, (state, action) => {
      state.isReviewFormBlocked = action.payload;
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
