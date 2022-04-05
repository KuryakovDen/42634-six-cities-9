import {AuthState} from './store/auth/auth';
import {AuthStatus} from './const';
import {CityState} from './store/city/city';
import {CommentState} from './store/comment/comment';
import {Review} from './types/review';

export const mockAuthState: AuthState = {
  authStatus: AuthStatus.Unknown, isAuthStatusLoading: false, userLogin: ''
};

export const mockCityState: CityState = {
  locationList: [],
  activeLocation: 'Cologne'
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
  }
};
