import {Offer} from '../../types/offer';
import {NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {setLocationList} from '../city/city';

type OfferState = {
  activeSortingOption: string;
  offerList: Offer[];
  isOfferListLoaded: boolean;
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
  isOfferListLoaded: false,
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
    checkOfferListLoaded: (state, action) => {
      state.isOfferListLoaded = action.payload;
    },
    setIsCurrentOfferLoading: (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    },
    changeFavoriteOffer: (state, action) => {
      if (state.currentOffer && state.currentOffer.id === action.payload.id) {
        state.currentOffer.isFavorite = action.payload.isFavorite;
      }

      if (state.neighborOffers && state.neighborOffers.length) {
        const index = state.neighborOffers.findIndex((offer) => offer.id === action.payload.id);

        if (index > -1) {
          state.neighborOffers[index].isFavorite = action.payload.isFavorite;
        }
      }

      const index = state.offerList.findIndex((offer) => offer.id === action.payload.id);

      if (index > -1) {
        state.offerList[index].isFavorite = action.payload.isFavorite;
      }
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
  checkOfferListLoaded,
  loadOffer,
  setIsCurrentOfferLoading,
  changeFavoriteOffer,
  loadFavoriteOffers,
  loadNeighborOffers,
  checkNeighborOffersLoaded,
  setReviewFormBlocked,
} = offerSlice.actions;
