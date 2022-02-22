export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  location: Location;
  name: string;
};

export type OfferHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Offer = {
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: OfferHost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
