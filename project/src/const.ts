export const RATING_COEFFICIENT = 20;
export const MAX_REVIEW_STARS_COUNT = 5;
export const MAX_REVIEW_COUNT = 10;

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_ACTIVE_MARKER = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum ValidReviewTextLength {
  Min = 50,
  Max = 300
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferId = '/offer/:id',
  Offer = '/offer'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
