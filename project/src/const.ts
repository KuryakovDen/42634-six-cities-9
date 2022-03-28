export const RATING_COEFFICIENT = 20;
export const MAX_REVIEW_STARS_COUNT = 5;
export const MAX_REVIEW_COUNT = 10;
export const SPINNER_SIZE = 150;
export const SPINNER_SPEED = 160;
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 2000;

export const SPINNER_COLOR = '#4481c3';
export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_ACTIVE_MARKER = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const BACKEND_URL = 'https://9.react.pages.academy/six-cities';
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export enum ValidReviewTextLength {
  Min = 50,
  Max = 300
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Logout = '/logout',
  Hotels = '/hotels',
  Favorites = '/favorites',
  Favorite = '/favorite',
  OfferId = '/offer/:id',
  Offer = '/offer',
  Comments = '/comments',
  NotFound = '*'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404
}

export enum NameSpace {
  Auth = 'AUTH',
  City = 'CITY',
  Offer = 'OFFER',
  Comment = 'COMMENT',
  Error = 'ERROR'
}
