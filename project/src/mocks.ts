import {AuthState} from './store/auth/auth';
import {AuthStatus} from './const';
import {CityState} from './store/city/city';
import {CommentState} from './store/comment/comment';
import {Review} from './types/review';
import {ErrorState} from './store/error/error';
import {OfferState} from './store/offer/offer';
import {Offer} from './types/offer';

export const mockAuthState: AuthState = {
  authStatus: AuthStatus.Unknown, isAuthStatusLoading: false, userLogin: '',
};

export const mockCityState: CityState = {
  locationList: [],
  activeLocation: 'Cologne',
};

export const mockCommentState: CommentState = {
  commentList: [],
  newCommentList: [],
  isCommentListLoaded: false,
};

export const mockComment: Review = {
  id: 1,
  comment: 'Very Good!',
  date: '2011-12-19T15:28:46.493Z',
  rating: 4,
  user: {
    id: 1,
    name: 'Denis',
    isPro: false,
    avatarUrl: 'avatar.jpg',
  },
};

export const mockErrorState: ErrorState = {
  error: '',
};

export const mockOfferState: OfferState = {
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

export const mockOffer: Offer = {
  id: 67,
  bedrooms: 2,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.388540000000006,
      longitude: 4.899976,
      zoom: 16,
    },
  },
  description: 'hotel',
  goods: ['Window', 'Bed'],
  host: {
    id: 25,
    avatarUrl: 'img/avatar-angelina.jpg',
    isPro: true,
    name: 'Angelina',
  },
  images: ['image1.jpg', 'image2.jpg'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 52.388540000000006,
    longitude: 4.899976,
    zoom: 16,
  },
  maxAdults: 2,
  previewImage: 'previewImage1.jpg',
  price: 500,
  rating: 4.7,
  title: 'Cologne Department Hostel',
  type: 'hostel',
};
