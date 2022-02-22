import OfferCard from '../offer-card/offer-card';
import React from 'react';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard  key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default OffersList;
