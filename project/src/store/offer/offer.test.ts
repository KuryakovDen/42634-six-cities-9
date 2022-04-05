import {mockOffer, mockOfferState} from '../../mocks';
import {
  changeActiveSortingOption, checkNeighborOffersLoaded,
  checkOfferListLoaded, loadFavoriteOffers, loadNeighborOffers,
  loadOffer, loadOffers,
  offerSlice,
  checkIsCurrentOfferLoading, checkReviewFormBlocked
} from './offer';

describe('Reducer: offerSlice', () => {
  const state = mockOfferState;

  it('returning initialState with unknown action', () => {
    expect(offerSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  it('changing activeSortingOption', () => {
    expect(offerSlice.reducer(state, changeActiveSortingOption('Top rated first')))
      .toEqual({...state, activeSortingOption: 'Top rated first'});
  });

  describe('offerList tests', () => {
    it('set offer to offerList', () => {
      expect(offerSlice.reducer(state, loadOffers([mockOffer])))
        .toEqual({ ...state, offerList: [mockOffer] });
    });

    it('set empty offerList', () => {
      const localState = { ...mockOfferState, offerList: [mockOffer] };

      expect(offerSlice.reducer(state, loadOffers([])))
        .toEqual({ ...localState, offerList: []});
    });
  });

  it('isOfferListLoaded flag must be true', () => {
    expect(offerSlice.reducer(state, checkOfferListLoaded(true)))
      .toEqual({ ...state, isOfferListLoaded: true });
  });

  it('set currentOffer', () => {
    expect(offerSlice.reducer(state, loadOffer(mockOffer)))
      .toEqual({ ...state, currentOffer: mockOffer });
  });

  it('checking isCurrentOfferLoading flag', () => {
    expect(offerSlice.reducer(state, checkIsCurrentOfferLoading(true)))
      .toEqual({ ...state, isCurrentOfferLoading: true });
  });

  describe('neighborOffers tests', () => {
    it('set offer to neighborOffers', () => {
      expect(offerSlice.reducer(state, loadNeighborOffers([mockOffer])))
        .toEqual({ ...state, neighborOffers: [mockOffer] });
    });

    it('set empty neighborOffers', () => {
      const localState = { ...mockOfferState, neighborOffers: [mockOffer] };

      expect(offerSlice.reducer(localState, loadNeighborOffers([])))
        .toEqual({ ...localState, neighborOffers: []});
    });
  });

  it('checking isNeighborOffersLoaded flag', () => {
    expect(offerSlice.reducer(state, checkNeighborOffersLoaded(true)))
      .toEqual({ ...state, isNeighborOffersLoaded: true });
  });

  it('checking isReviewFormBlocked flag', () => {
    expect(offerSlice.reducer(state, checkReviewFormBlocked(true)))
      .toEqual({ ...state, isReviewFormBlocked: true });
  });

  describe('favoriteOffers tests', () => {
    it('set offer to favoriteOffers', () => {
      expect(offerSlice.reducer(state, loadFavoriteOffers([mockOffer])))
        .toEqual({ ...state, favoriteOffers: [mockOffer] });
    });

    it('set empty favoriteOffers', () => {
      const localState = { ...mockOfferState, favoriteOffers: [mockOffer] };

      expect(offerSlice.reducer(localState, loadFavoriteOffers([])))
        .toEqual({ ...localState, favoriteOffers: []});
    });
  });
});
