export const RATING_COEFFICIENT = 20;
export const MAX_REVIEW_STARS_COUNT = 5;

export enum ValidReviewTextLength {
  Min = 50,
  Max = 300
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
