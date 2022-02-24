import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    'comment': 'A quiet cozy and picturesque',
    'date': 'Wed Nov 11 2021 12:10:51 GMT+0700 (Novosibirsk Standard Time)',
    'id': 1,
    'rating': 5,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 1,
      'isPro': true,
      'name': 'Vova',
    },
  },
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Wed Feb 23 2020 12:10:51 GMT+0700 (Novosibirsk Standard Time)',
    'id': 2,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 2,
      'isPro': false,
      'name': 'Denis',
    },
  },
  {
    'comment': 'Good place.',
    'date': 'Wed Jul 20 2022 12:10:51 GMT+0700 (Novosibirsk Standard Time)',
    'id': 3,
    'rating': 2,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 3,
      'isPro': false,
      'name': 'Ivan',
    },
  },
  {
    'comment': 'Cool!',
    'date': 'Wed Jan 15 2018 12:10:51 GMT+0700 (Novosibirsk Standard Time)',
    'id': 4,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 4,
      'isPro': true,
      'name': 'Oliver',
    },
  },
];
