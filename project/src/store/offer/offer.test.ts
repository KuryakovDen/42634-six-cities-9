import {mockOffer, mockOfferState} from '../../mocks';
import {
  changeActiveSortingOption, checkNeighborOffersLoaded,
  checkOfferListLoaded, loadFavoriteOffers, loadNeighborOffers,
  loadOffer, loadOffers,
  offerSlice,
  setIsCurrentOfferLoading, setReviewFormBlocked
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
      const state = { ...mockOfferState, offerList: [mockOffer] };

        expect(offerSlice.reducer(state, loadOffers([])))
          .toEqual({ ...state, offerList: []});
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
    expect(offerSlice.reducer(state, setIsCurrentOfferLoading(true)))
      .toEqual({ ...state, isCurrentOfferLoading: true });
  });

  describe('neighborOffers tests', () => {
    it('set offer to neighborOffers', () => {
      expect(offerSlice.reducer(state, loadNeighborOffers([mockOffer])))
        .toEqual({ ...state, neighborOffers: [mockOffer] });
    });

    it('set empty neighborOffers', () => {
      const state = { ...mockOfferState, neighborOffers: [mockOffer] };

      expect(offerSlice.reducer(state, loadNeighborOffers([])))
        .toEqual({ ...state, neighborOffers: []});
    });
  });

  it('checking isNeighborOffersLoaded flag', () => {
    expect(offerSlice.reducer(state, checkNeighborOffersLoaded(true)))
      .toEqual({ ...state, isNeighborOffersLoaded: true });
  });

  it('checking isReviewFormBlocked flag', () => {
    expect(offerSlice.reducer(state, setReviewFormBlocked(true)))
      .toEqual({ ...state, isReviewFormBlocked: true });
  });

  describe('favoriteOffers tests', () => {
    it('set offer to favoriteOffers', () => {
      expect(offerSlice.reducer(state, loadFavoriteOffers([mockOffer])))
        .toEqual({ ...state, favoriteOffers: [mockOffer] });
    });

    it('set empty favoriteOffers', () => {
      const state = { ...mockOfferState, favoriteOffers: [mockOffer] };

      expect(offerSlice.reducer(state, loadFavoriteOffers([])))
        .toEqual({ ...state, favoriteOffers: []});
    });
  });
});
