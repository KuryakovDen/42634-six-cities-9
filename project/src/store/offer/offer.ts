import {Offer} from '../../types/offer';
import {NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';

type OfferState = {
  activeSortingOption: string;
  offerList: Offer[];
  currentOffer: Offer | null;
  isCurrentOfferLoading: boolean;
  neighborOffers: Offer[] | [];
  isNeighborOffersLoaded: boolean;
  isReviewFormBlocked: boolean;
  favoriteOffers: Offer[] | [];
};

const initialState: OfferState = {
  activeSortingOption: 'Popular',
  offerList: [],
  currentOffer: null,
  isCurrentOfferLoading: true,
  neighborOffers: [],
  isNeighborOffersLoaded: false,
  isReviewFormBlocked: false,
  favoriteOffers: [],
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeActiveSortingOption: (state, action) => {
      state.activeSortingOption = action.payload;
    },
    loadOffers: (state, action) => {
      state.offerList = action.payload;
    },
    loadOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    setIsCurrentOfferLoading: (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    },
    changeFavoriteOffer: (state, action) => {
      const index = state.offerList.findIndex((offer) => offer.id === action.payload.id);
      state.offerList[index].isFavorite = action.payload.isFavorite;
    },
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    loadNeighborOffers: (state, action) => {
      state.neighborOffers = action.payload;
    },
    checkNeighborOffersLoaded: (state, action) => {
      state.isNeighborOffersLoaded = action.payload;
    },
    setReviewFormBlocked: (state, action) => {
      state.isReviewFormBlocked = action.payload;
    },
  },
});

export const {
  changeActiveSortingOption,
  loadOffers,
  loadOffer,
  setIsCurrentOfferLoading,
  changeFavoriteOffer,
  loadFavoriteOffers,
  loadNeighborOffers,
  checkNeighborOffersLoaded,
  setReviewFormBlocked,
} = offerSlice.actions;
