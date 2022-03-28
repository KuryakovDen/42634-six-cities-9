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
};

const initialState: OfferState = {
  activeSortingOption: 'Popular',
  offerList: [],
  currentOffer: null,
  isCurrentOfferLoading: true,
  neighborOffers: [],
  isNeighborOffersLoaded: false,
  isReviewFormBlocked: false,
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
  loadNeighborOffers,
  checkNeighborOffersLoaded,
  setReviewFormBlocked,
} = offerSlice.actions;
